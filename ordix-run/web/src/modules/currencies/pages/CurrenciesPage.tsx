import { useEffect, useState } from 'react';
import { DeleteOutlined, EditOutlined, PlusOutlined } from '@ant-design/icons';
import { Alert, App, Button, Popconfirm, Space, Table, Tag, Tooltip, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { observer } from 'mobx-react-lite';
import { getErrorMessage } from '../../../shared/api/error';
import { formatNumber } from '../../../shared/utils/format';
import CurrencyFormModal from '../components/CurrencyFormModal';
import { currenciesStore as store } from '../store/currencies.store';
import { DEFAULT_CURRENCY_SYMBOL, type ICurrency } from '../types';

const CurrenciesPage = observer(function CurrenciesPage() {
  const { message } = App.useApp();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ICurrency | null>(null);

  useEffect(() => {
    void store.fetch();
  }, []);

  const openForm = (currency: ICurrency | null) => {
    setEditing(currency);
    setOpen(true);
  };

  const remove = async (currency: ICurrency) => {
    try {
      await store.remove(currency.id);
      message.success("Valyuta o'chirildi");
    } catch (e) {
      message.error(getErrorMessage(e));
    }
  };

  const columns: ColumnsType<ICurrency> = [
    {
      title: 'Nomi',
      dataIndex: 'name',
      render: (name: string, c) => (
        <Space>
          <Typography.Text strong>{name}</Typography.Text>
          {c.symbol === DEFAULT_CURRENCY_SYMBOL && <Tag color="orange">Asosiy</Tag>}
        </Space>
      ),
    },
    { title: 'Belgi', dataIndex: 'symbol' },
    {
      title: 'Kurs',
      dataIndex: 'exchangeRate',
      align: 'right',
      render: (rate: number, c) => `1 ${c.symbol} = ${formatNumber(rate)} so'm`,
    },
    {
      title: '',
      key: 'actions',
      width: 96,
      render: (_, c) => (
        <Space size={4}>
          <Tooltip title="Tahrirlash">
            <Button type="text" aria-label="Tahrirlash" icon={<EditOutlined />} onClick={() => openForm(c)} />
          </Tooltip>
          <Popconfirm
            title="Valyutani o'chirish"
            description={`${c.symbol} ro'yxatdan o'chiriladi.`}
            okText="O'chirish"
            cancelText="Bekor qilish"
            okButtonProps={{ danger: true }}
            disabled={c.symbol === DEFAULT_CURRENCY_SYMBOL}
            onConfirm={() => remove(c)}
          >
            <Button
              type="text"
              danger
              aria-label="O'chirish"
              icon={<DeleteOutlined />}
              disabled={c.symbol === DEFAULT_CURRENCY_SYMBOL}
            />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <>
      <div className="row-between" style={{ flexWrap: 'wrap', marginBottom: 20 }}>
        <div>
          <h1 className="greeting">Valyutalar</h1>
          <p className="greeting-sub" style={{ marginBottom: 0 }}>
            Valyutalar va ularning so'mga nisbatan kursi.
          </p>
        </div>
        <button className="btn-pill btn-dark" onClick={() => openForm(null)}>
          <PlusOutlined /> Valyuta qo'shish
        </button>
      </div>

      {store.error && (
        <Alert
          type="error"
          showIcon
          style={{ marginBottom: 16 }}
          message={store.error}
          action={
            <Button size="small" onClick={() => void store.fetch()}>
              Qayta urinish
            </Button>
          }
        />
      )}

      <div className="o-card">
        <Table<ICurrency>
          rowKey="id"
          size="small"
          columns={columns}
          dataSource={store.items.slice()}
          loading={store.loading}
          pagination={false}
          scroll={{ x: 480 }}
          locale={{ emptyText: "Valyuta yo'q. «Valyuta qo'shish» tugmasini bosing." }}
        />
      </div>

      <CurrencyFormModal open={open} currency={editing} onClose={() => setOpen(false)} />
    </>
  );
});

export default CurrenciesPage;
