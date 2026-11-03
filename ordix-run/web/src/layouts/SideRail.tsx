import { useState, type ReactNode } from 'react';
import {
  LogoutOutlined,
  MoonOutlined,
  QuestionCircleOutlined,
  SunOutlined,
} from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { useThemeMode } from '../app/theme-mode';
import { isActive, nav, type NavChild } from './menu';

interface RailButtonProps {
  icon: ReactNode;
  label: string;
  active?: boolean;
  links?: NavChild[];
  onClick?: () => void;
}

function RailButton({ icon, label, active, links, onClick }: RailButtonProps) {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [pos, setPos] = useState<{ top: number; left: number }>();

  // Submenyu rail ichida qirqilmasligi va kartalar ustida chiqishi uchun fixed joylashadi
  const place = (el: HTMLElement) => {
    const r = el.getBoundingClientRect();
    const center = r.top + r.height / 2;
    setPos({ top: Math.min(Math.max(center, 90), window.innerHeight - 110), left: r.right });
  };

  return (
    <div
      className="rail-item"
      onMouseEnter={(e) => place(e.currentTarget)}
      onFocus={(e) => place(e.currentTarget)}
    >
      <button className={`rail-btn${active ? ' active' : ''}`} aria-label={label} onClick={onClick}>
        {icon}
      </button>
      <div className="flyout" style={pos}>
        <div className="flyout-card">
          <div className="flyout-title">{label}</div>
          {links?.map((c) => (
            <button
              key={c.key}
              className={`flyout-link${pathname === c.key ? ' active' : ''}`}
              onClick={() => navigate(c.key)}
            >
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function SideRail() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { mode, setMode } = useThemeMode();

  return (
    <aside className="rail">
      <div className="rail-pill">
        <RailButton icon={<SunOutlined />} label="Yorug' rejim" active={mode === 'light'} onClick={() => setMode('light')} />
        <RailButton icon={<MoonOutlined />} label="Qorong'i rejim" active={mode === 'dark'} onClick={() => setMode('dark')} />
      </div>
      <div className="rail-pill">
        {nav.map((item) => (
          <RailButton
            key={item.key}
            icon={item.icon}
            label={item.label}
            links={item.children}
            active={isActive(item, pathname)}
            onClick={item.children ? undefined : () => navigate(item.key)}
          />
        ))}
      </div>
      <div className="rail-pill">
        <RailButton icon={<QuestionCircleOutlined />} label="Yordam" />
        <RailButton icon={<LogoutOutlined />} label="Chiqish" />
      </div>
    </aside>
  );
}
