import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Table} from 'antd';
import { observer } from 'mobx-react';
import React from 'react';
import { ICurrency } from '@/shared/api/currency/types';
import { useQuery } from '@tanstack/react-query';
import { currencyColumn } from './constants';
import { AddEditCurrencyModal } from './AddEditModal';
import { currencyStore } from '@/stores/workers';

export const CurrenciesPage = observer(function CurrenciesPage() {
  const { data: currencyData, isLoading: loading } = useQuery({
    queryKey: ['getCurrency'],
    queryFn: () =>
      currencyStore.getCurrency(),
  });

  const handleOpenAddEditCurrencyModal = () => {
    currencyStore.setIsOpenEditCurrencyModal(true);
  }

  return (
    <>
      <div className="row-between" style={{ flexWrap: 'wrap', marginBottom: 20 }}>
        <div>
          <h1 className="greeting">Valyutalar</h1>
          <p className="greeting-sub" style={{ marginBottom: 0 }}>
            Valyutalar va ularning so'mga nisbatan kursi.
          </p>
        </div>
        <button className="btn-pill btn-dark" onClick={handleOpenAddEditCurrencyModal}>
          <PlusOutlined /> Valyuta qo'shish
        </button>
      </div>

      <div className="o-card">
        <Table<ICurrency>
          rowKey="id"
          bordered
          size="small"
          columns={currencyColumn}
          dataSource={currencyData?.data?.data || []}
          pagination={false}
          scroll={{ x: 480 }}
          loading={loading}
          locale={{ emptyText: "Valyuta yo'q. «Valyuta qo'shish» tugmasini bosing." }}
        />
      </div>

      {currencyStore.isOpenEditCurrency && <AddEditCurrencyModal />}
    </>
  );
});
