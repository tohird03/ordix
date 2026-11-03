import React, { useEffect, useMemo, useState } from 'react';
import { observer } from 'mobx-react';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Form, Input, InputNumber, Modal, Select } from 'antd';
import { currencyStore } from '@/stores/workers';
import { addNotification } from '@/shared/utils/addNotification';
import { priceFormat } from '@/shared/utils/priceFormat';
import { currencyApi } from '@/shared/api/currency/currency';
import { ICurrency, IAddEditCurrency } from '@/shared/api/currency/types';
import { DEFAULT_CURRENCY_SYMBOL } from './types';

export const AddEditCurrencyModal = observer(() => {
  const [form] = Form.useForm();
  const queryClient = useQueryClient();
  const [loading, setLoading] = useState(false);

  const { mutate: addCurrency } =
    useMutation({
      mutationKey: ['addCurrency'],
      mutationFn: (params: IAddEditCurrency) => currencyApi.addNewCurrency(params),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['getCurrency'] });
        addNotification('Valyuta muvaffaqiyatli qo\'shildi');
        handleModalClose();
      },
      onError: addNotification,
      onSettled: async () => {
        setLoading(false);
      },
    });

  const { mutate: updateCurrency } =
    useMutation({
      mutationKey: ['updateCurrency'],
      mutationFn: (params: IAddEditCurrency) => currencyApi.currencyEdit(params),
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: ['getCurrency'] });
        addNotification('Valyuta muvaffaqiyatli tahrirlandi');
        handleModalClose();
      },
      onError: addNotification,
      onSettled: async () => {
        setLoading(false);
      },
    });

  const handleSubmit = (values: ICurrency) => {
    setLoading(true);

    const currencyOptions: IAddEditCurrency = {
      exchangeRate: values?.exchangeRate,
      name: values?.name,
    };

    if (currencyStore?.singleCurrency?.id) {
      updateCurrency({
        id: currencyStore?.singleCurrency?.id!,
        ...currencyOptions
      });

      return;
    }

    addCurrency(currencyOptions);
  };

  const handleModalClose = () => {
    currencyStore.setSingleCurrency(null);
    currencyStore.setIsOpenEditCurrencyModal(false);
  };

  const handleModalOk = () => {
    form.submit();
  };

  useEffect(() => {
    if (currencyStore.singleCurrency) {
      form.setFieldsValue({
        name: currencyStore.singleCurrency?.name,
        symbol: currencyStore.singleCurrency?.symbol,
        exchangeRate: currencyStore?.singleCurrency?.exchangeRate,
      });
    }
  }, [currencyStore.singleCurrency]);

  return (
    <Modal
      open={currencyStore.isOpenEditCurrency}
      title={currencyStore?.singleCurrency ? 'Valyutani tahrirlash' : 'Valyuta qo\'shish'}
      okText={currencyStore?.singleCurrency ? 'Valyutani tahrirlash' : 'Valyuta qo\'shish'}
      onCancel={handleModalClose}
      onOk={handleModalOk}
      cancelText="Bekor qilish"
      centered
      confirmLoading={loading}
    >

      <Form
        form={form}
        layout="vertical"
        style={{ marginTop: 16 }}
        autoComplete="off"
        onFinish={handleSubmit}

      >
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
          <Input
            placeholder="USD"
            maxLength={10}
            disabled={!!currencyStore?.singleCurrency?.id}
          />
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
            disabled={currencyStore?.singleCurrency?.symbol === DEFAULT_CURRENCY_SYMBOL}
            placeholder="12650"
            formatter={(value) => priceFormat(value)}
            parser={(v) => Number((v ?? '').replace(/\s/g, ''))}
          />
        </Form.Item>
      </Form>
    </Modal>
  );
});
