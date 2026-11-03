import { useEffect, useState } from 'react';
import { App, Form, Input, InputNumber, Modal } from 'antd';
import { getErrorMessage } from '../../../shared/api/error';
import { formatNumber } from '../../../shared/utils/format';
import { currenciesStore } from '../store/currencies.store';
import { DEFAULT_CURRENCY_SYMBOL, type CurrencyInput, type ICurrency } from '../types';

interface Props {
  open: boolean;
  currency: ICurrency | null; // null bo'lsa yangi valyuta qo'shiladi
  onClose: () => void;
}

export default function CurrencyFormModal({ open, currency, onClose }: Props) {
  const { message } = App.useApp();
  const [form] = Form.useForm<CurrencyInput>();
  const [saving, setSaving] = useState(false);
  const isDefault = currency?.symbol === DEFAULT_CURRENCY_SYMBOL;

  useEffect(() => {
    if (!open) return;
    form.resetFields();
    if (currency) form.setFieldsValue(currency);
  }, [open, currency, form]);

  const submit = async () => {
    const values = await form.validateFields().catch(() => null);
    if (!values) return; // forma xatolari maydonlar ostida ko'rsatiladi
    setSaving(true);
    try {
      if (currency) {
        await currenciesStore.update(currency.id, values);
        message.success('Valyuta yangilandi');
      } else {
        await currenciesStore.create(values);
        message.success("Valyuta qo'shildi");
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
      open={open}
      title={currency ? 'Valyutani tahrirlash' : "Valyuta qo'shish"}
      okText="Saqlash"
      cancelText="Bekor qilish"
      confirmLoading={saving}
      onOk={submit}
      onCancel={onClose}
    >
      <Form form={form} layout="vertical" style={{ marginTop: 16 }}>
        <Form.Item name="name" label="Nomi" rules={[{ required: true, message: 'Nomini kiriting' }]}>
          <Input placeholder="AQSH dollari" maxLength={100} />
        </Form.Item>
        <Form.Item
          name="symbol"
          label="Belgi (kod)"
          normalize={(v?: string) => (v ?? '').toUpperCase()}
          rules={[
            { required: true, message: 'Valyuta kodini kiriting' },
            { pattern: /^[A-Z]{2,10}$/, message: 'Faqat lotin harflari (masalan, USD)' },
          ]}
        >
          <Input placeholder="USD" maxLength={10} disabled={isDefault} />
        </Form.Item>
        <Form.Item
          name="exchangeRate"
          label="Kurs (1 birlik necha so'm)"
          rules={[{ required: true, message: 'Kursni kiriting' }]}
        >
          <InputNumber<number>
            style={{ width: '100%' }}
            min={1}
            precision={0}
            disabled={isDefault}
            placeholder="12650"
            formatter={(v) => (v === undefined ? '' : formatNumber(v))}
            parser={(v) => Number((v ?? '').replace(/\s/g, ''))}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
}
