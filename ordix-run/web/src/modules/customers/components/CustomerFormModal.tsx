import { useEffect, useState } from 'react';
import { App, Form, Input, InputNumber, Modal } from 'antd';
import { getErrorMessage } from '../../../shared/api/error';
import { formatNumber, formatPhone, isValidUzPhone } from '../../../shared/utils/format';
import { customersStore } from '../store/customers.store';
import type { CustomerInput, ICustomer } from '../types';
import LocationPicker, { type LatLng } from './LocationPicker';

interface Props {
  open: boolean;
  customer: ICustomer | null; // null bo'lsa yangi mijoz qo'shiladi
  onClose: () => void;
}

interface FormValues {
  name: string;
  phone: string;
  debt?: number;
  address?: string;
  location?: LatLng | null;
}

export default function CustomerFormModal({ open, customer, onClose }: Props) {
  const { message } = App.useApp();
  const [form] = Form.useForm<FormValues>();
  const [saving, setSaving] = useState(false);
  const [mapReady, setMapReady] = useState(false);

  useEffect(() => {
    if (!open) return;
    form.resetFields();
    if (customer) {
      form.setFieldsValue({
        name: customer.name,
        phone: formatPhone(customer.phone),
        address: customer.address ?? undefined,
        location: customer.lat !== null && customer.lng !== null ? { lat: customer.lat, lng: customer.lng } : null,
      });
    }
  }, [open, customer, form]);

  const submit = async () => {
    const v = await form.validateFields().catch(() => null);
    if (!v) return; // forma xatolari maydonlar ostida ko'rsatiladi
    const address = v.address?.trim() || null;
    const lat = v.location?.lat ?? null;
    const lng = v.location?.lng ?? null;
    setSaving(true);
    try {
      if (customer) {
        await customersStore.update(customer.id, { name: v.name.trim(), phone: v.phone, address, lat, lng });
        message.success('Mijoz yangilandi');
      } else {
        const input: CustomerInput = { name: v.name.trim(), phone: v.phone };
        if (address) input.address = address;
        if (lat !== null && lng !== null) Object.assign(input, { lat, lng });
        if (v.debt) input.debt = v.debt;
        await customersStore.create(input);
        message.success("Mijoz qo'shildi");
      }
      onClose();
    } catch (e) {
      message.error(getErrorMessage(e));
    } finally {
      setSaving(false);
    }
  };

  return (
    <Modal
      forceRender
      width={560}
      style={{ top: 32 }}
      styles={{ body: { maxHeight: 'calc(100vh - 200px)', overflowY: 'auto', paddingRight: 6 } }}
      open={open}
      title={customer ? 'Mijozni tahrirlash' : "Mijoz qo'shish"}
      okText="Saqlash"
      cancelText="Bekor qilish"
      confirmLoading={saving}
      onOk={submit}
      onCancel={onClose}
      afterOpenChange={setMapReady}
    >
      <Form form={form} layout="vertical" style={{ marginTop: 16 }}>
        <Form.Item name="name" label="Ismi" rules={[{ required: true, whitespace: true, message: 'Ismni kiriting' }]}>
          <Input placeholder="Baraka Savdo MChJ" maxLength={150} />
        </Form.Item>
        <Form.Item
          name="phone"
          label="Telefon raqami"
          rules={[
            { required: true, message: 'Telefon raqamini kiriting' },
            { validator: (_, v?: string) => (!v || isValidUzPhone(v) ? Promise.resolve() : Promise.reject(new Error("Telefon raqami noto'g'ri"))) },
          ]}
        >
          <Input placeholder="+998 90 123 45 67" maxLength={20} />
        </Form.Item>
        {!customer && (
          <Form.Item name="debt" label="Boshlang'ich qarz (so'm)" extra="Keyin qarzni sotuv va to'lovlar o'zgartiradi">
            <InputNumber<number>
              style={{ width: '100%' }}
              min={0}
              precision={0}
              placeholder="0"
              formatter={(v) => (v === undefined ? '' : formatNumber(v))}
              parser={(v) => Number((v ?? '').replace(/\s/g, ''))}
            />
          </Form.Item>
        )}
        <Form.Item name="address" label="Manzil">
          <Input placeholder="Xaritadan tanlasangiz, o'zi to'ldiriladi" maxLength={300} />
        </Form.Item>
        <Form.Item name="location" label="Xaritadan joyni tanlang">
          <LocationPicker ready={mapReady && open} onAddress={(a) => form.setFieldValue('address', a)} />
        </Form.Item>
      </Form>
    </Modal>
  );
}
