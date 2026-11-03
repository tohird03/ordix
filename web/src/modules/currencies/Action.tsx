import React, { FC } from 'react';
import { observer } from 'mobx-react';
import { EditOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { currencyStore } from '@/stores/workers';
import { ICurrency } from '@/shared/api/currency/types';

type Props = {
  currency: ICurrency;
};

export const Action: FC<Props> = observer(({ currency }) => {
  const handleEditCurrency = () => {
    currencyStore.setSingleCurrency(currency);
    currencyStore.setIsOpenEditCurrencyModal(true);
  };

  return (
    <div style={{ display: 'flex', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
      <Button onClick={handleEditCurrency} type="primary" icon={<EditOutlined />} />
    </div>
  );
});
