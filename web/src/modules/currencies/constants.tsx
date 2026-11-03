import React from 'react';
import { ColumnType } from 'antd/es/table';
import { Action } from './Action';
import { ICurrency } from '@/shared/api/currency/types';
import { priceFormat } from '@/shared/utils/priceFormat';

export const currencyColumn: ColumnType<ICurrency>[] = [
  {
    key: 'index',
    dataIndex: 'index',
    title: '#',
    align: 'center',
    render: (value, record, index) => index + 1,
  },
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Valyuta',
    align: 'center',
    render: (value, record) => <span>{record?.symbol}</span>,
  },
  {
    key: 'rate',
    dataIndex: 'rate',
    title: 'Qiymat',
    align: 'center',
    width: 200,
    render: (value, record) => <span>{priceFormat(record?.exchangeRate)}</span>,
  },
  {
    key: 'action',
    dataIndex: 'action',
    title: 'Action',
    align: 'center',
    render: (value, record) => <Action currency={record} />,
  },
];
