import { useEffect, useState } from 'react';
import { Alert, App, Button, Card, Space, Typography } from 'antd';
import { observer } from 'mobx-react-lite';
import { getErrorMessage } from '../../../shared/api/error';
import CustomerFormModal from '../components/CustomerFormModal';
import CustomersFilterBar from '../components/CustomersFilterBar';
import CustomersTable from '../components/CustomersTable';
import { customersStore as store } from '../store/customers.store';
import type { ICustomer } from '../types';

const CustomersPage = observer(function CustomersPage() {
  const { message } = App.useApp();
  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<ICustomer | null>(null);

  // Qidiruv yozilayotganda har harfda so'rov yubormaslik uchun biroz kutiladi
  useEffect(() => {
    const t = setTimeout(() => void store.fetch(), 300);
    return () => clearTimeout(t);
  }, [store.search, store.hasDebt, store.pageNumber]);

  const openForm = (customer: ICustomer | null) => {
    setEditing(customer);
    setOpen(true);
  };

  const remove = async (customer: ICustomer) => {
    try {
      await store.remove(customer.id);
      message.success("Mijoz o'chirildi");
    } catch (e) {
      message.error(getErrorMessage(e));
    }
  };

  return (
    <Space direction="vertical" size={16} style={{ width: '100%' }}>
      <div>
        <Typography.Title level={4} style={{ margin: 0 }}>
          Mijozlar ro'yxati
        </Typography.Title>
        <Typography.Text type="secondary">Jami: {store.total} ta mijoz</Typography.Text>
      </div>

      {store.error && (
        <Alert
          type="error"
          showIcon
          message={store.error}
          action={
            <Button size="small" onClick={() => void store.fetch()}>
              Qayta urinish
            </Button>
          }
        />
      )}

      <Card styles={{ body: { padding: 16 } }}>
        <Space direction="vertical" size={16} style={{ width: '100%' }}>
          <CustomersFilterBar
            search={store.search}
            debtFilter={store.hasDebt ? 'debt' : 'all'}
            onSearchChange={(v) => store.setSearch(v)}
            onDebtFilterChange={(v) => store.setHasDebt(v === 'debt')}
            onCreate={() => openForm(null)}
          />
          <CustomersTable
            data={store.items.slice()}
            total={store.total}
            page={store.pageNumber}
            pageSize={store.pageSize}
            loading={store.loading}
            onPageChange={(p) => store.setPage(p)}
            onEdit={openForm}
            onDelete={remove}
          />
        </Space>
      </Card>

      <CustomerFormModal open={open} customer={editing} onClose={() => setOpen(false)} />
    </Space>
  );
});

export default CustomersPage;
