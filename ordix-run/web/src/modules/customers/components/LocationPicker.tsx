import { useEffect, useRef, useState } from 'react';
import { EnvironmentOutlined, SearchOutlined } from '@ant-design/icons';
import { App, Button, Input, Space } from 'antd';
import axios from 'axios';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import '../customers.css';

export interface LatLng {
  lat: number;
  lng: number;
}

interface Props {
  value?: LatLng | null;
  onChange?: (value: LatLng | null) => void;
  onAddress?: (address: string) => void; // tanlangan joyning manzili
  ready?: boolean; // modal to'liq ochilgandan keyin xarita yaratiladi
}

interface NominatimItem {
  place_id: number;
  display_name: string;
  lat: string;
  lon: string;
}

const TASHKENT: [number, number] = [41.3111, 69.2797];
const NOMINATIM = 'https://nominatim.openstreetmap.org';
const pin = L.divIcon({ className: 'map-pin', html: '<span></span>', iconSize: [22, 22], iconAnchor: [11, 22] });

function MapInner({ value, onChange, onAddress }: Props) {
  const { message } = App.useApp();
  const box = useRef<HTMLDivElement>(null);
  const map = useRef<L.Map | null>(null);
  const marker = useRef<L.Marker | null>(null);
  const handlers = useRef({ onChange, onAddress });
  handlers.current = { onChange, onAddress };

  const [query, setQuery] = useState('');
  const [results, setResults] = useState<NominatimItem[]>([]);
  const [searching, setSearching] = useState(false);

  // Bosilgan joyning manzilini topadi (internet bo'lmasa, manzil qo'lda kiritiladi)
  const reverse = async (lat: number, lng: number) => {
    try {
      const r = await axios.get(`${NOMINATIM}/reverse`, {
        params: { format: 'jsonv2', lat, lon: lng, 'accept-language': 'uz' },
      });
      if (r.data?.display_name) handlers.current.onAddress?.(r.data.display_name);
    } catch {
      /* ignore */
    }
  };

  // Xaritani bir marta yaratish
  useEffect(() => {
    const m = L.map(box.current!).setView(value ? [value.lat, value.lng] : TASHKENT, value ? 16 : 12);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '© OpenStreetMap',
    }).addTo(m);
    m.on('click', (e: L.LeafletMouseEvent) => {
      handlers.current.onChange?.({ lat: e.latlng.lat, lng: e.latlng.lng });
      void reverse(e.latlng.lat, e.latlng.lng);
    });
    map.current = m;
    const t = setTimeout(() => m.invalidateSize(), 300);
    return () => {
      clearTimeout(t);
      m.remove();
      map.current = null;
      marker.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // Marker qiymatga mos turadi
  useEffect(() => {
    const m = map.current;
    if (!m) return;
    if (value) {
      if (marker.current) marker.current.setLatLng([value.lat, value.lng]);
      else marker.current = L.marker([value.lat, value.lng], { icon: pin }).addTo(m);
    } else if (marker.current) {
      marker.current.remove();
      marker.current = null;
    }
  }, [value?.lat, value?.lng]); // eslint-disable-line react-hooks/exhaustive-deps

  const search = async () => {
    const q = query.trim();
    if (!q) return;
    setSearching(true);
    try {
      const r = await axios.get<NominatimItem[]>(`${NOMINATIM}/search`, {
        params: { format: 'jsonv2', q, limit: 5, countrycodes: 'uz', 'accept-language': 'uz' },
      });
      setResults(r.data);
      if (r.data.length === 0) message.info('Hech narsa topilmadi');
    } catch {
      message.error("Qidirib bo'lmadi. Internetni tekshiring.");
    } finally {
      setSearching(false);
    }
  };

  const choose = (item: NominatimItem) => {
    const lat = Number(item.lat);
    const lng = Number(item.lon);
    onChange?.({ lat, lng });
    onAddress?.(item.display_name);
    map.current?.flyTo([lat, lng], 16);
    setResults([]);
  };

  return (
    <div>
      <Space.Compact style={{ width: '100%' }}>
        <Input
          allowClear
          value={query}
          placeholder="Joyni qidiring (masalan, Chilonzor 9)"
          onChange={(e) => setQuery(e.target.value)}
          onPressEnter={(e) => {
            e.preventDefault();
            void search();
          }}
        />
        <Button icon={<SearchOutlined />} loading={searching} onClick={() => void search()}>
          Qidirish
        </Button>
      </Space.Compact>

      {results.length > 0 && (
        <div className="map-results">
          {results.map((r) => (
            <button key={r.place_id} type="button" onClick={() => choose(r)}>
              <EnvironmentOutlined /> {r.display_name}
            </button>
          ))}
        </div>
      )}

      <div ref={box} className="map-box" />

      <div className="map-hint">
        <span>
          {value ? `${value.lat.toFixed(5)}, ${value.lng.toFixed(5)}` : 'Xaritaga bosib joyni belgilang'}
        </span>
        {value && (
          <a onClick={() => onChange?.(null)} role="button">
            Joyni o'chirish
          </a>
        )}
      </div>
    </div>
  );
}

export default function LocationPicker(props: Props) {
  return props.ready ? <MapInner {...props} /> : <div className="map-box" />;
}
