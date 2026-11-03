import { DeleteOutlined, EditOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Button, Popconfirm, Space, Table, Tooltip, Typography } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { formatDateTime, formatNumber, formatPhone } from '../../../shared/utils/format';
import type { ICustomer } from '../types';

interface Props {
  data: ICustomer[];
  total: number;
  page: number;
  pageSize: number;
  loading: boolean;
  onPageChange: (page: number) => void;
  onEdit: (customer: ICustomer) => void;
  onDelete: (customer: ICustomer) => void;
}

const mapUrl = (c: ICustomer) =>
  `https://www.openstreetmap.org/?mlat=${c.lat}&mlon=${c.lng}#map=17/${c.lat}/${c.lng}`;

export default function CustomersTable({
  data, total, page, pageSize, loading, onPageChange, onEdit, onDelete,
}: Props) {
  const columns: ColumnsType<ICustomer> = [
    {
      title: 'Mijoz',
      dataIndex: 'name',
      render: (name: string) => <Typography.Text strong>{name}</Typography.Text>,
    },
    { title: 'Telefon', dataIndex: 'phone', render: (p: string) => formatPhone(p) },
    {
      title: 'Manzil',
      dataIndex: 'address',
      responsive: ['lg'],
      render: (address: string | null, c) =>
        address || c.lat !== null ? (
          <Space size={6}>
            <span>{address ?? '—'}</span>
            {c.lat !== null && (
              <Tooltip title="Xaritada ko'rish">
                <a href={mapUrl(c)} target="_blank" rel="noreferrer" aria-label="Xaritada ko'rish">
                  <EnvironmentOutlined />
                </a>
              </Tooltip>
            )}
          </Space>
        ) : (
          '—'
        ),
    },
    {
      title: 'Qarz',
      dataIndex: 'debt',
      align: 'right',
      render: (debt: number) =>
        debt > 0 ? <Typography.Text type="danger">{formatNumber(debt)} so'm</Typography.Text> : '—',
    },
    {
      title: 'Oxirgi sotuv',
      dataIndex: 'lastSaleAt',
      responsive: ['md'],
      render: (d: string | null) => formatDateTime(d),
    },
    {
      title: '',
      key: 'actions',
      fixed: 'right',
      width: 96,
      render: (_, record) => (
        <Space size={4}>
          <Tooltip title="Tahrirlash">
            <Button type="text" icon={<EditOutlined />} aria-label="Tahrirlash" onClick={() => onEdit(record)} />
          </Tooltip>
          <Popconfirm
            title="Mijozni o'chirish"
            description={`${record.name} ro'yxatdan o'chiriladi.`}
            okText="O'chirish"
            cancelText="Bekor qilish"
            okButtonProps={{ danger: true }}
            onConfirm={() => onDelete(record)}
          >
            <Button type="text" danger icon={<DeleteOutlined />} aria-label="O'chirish" />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  return (
    <Table<ICustomer>
      rowKey="id"
      size="small"
      columns={columns}
      dataSource={data}
      loading={loading}
      scroll={{ x: 640 }}
      pagination={{
        current: page,
        pageSize,
        total,
        showSizeChanger: false,
        hideOnSinglePage: true,
        onChange: onPageChange,
      }}
      locale={{ emptyText: "Mijoz topilmadi. Qidiruvni o'zgartiring yoki yangi mijoz qo'shing." }}
    />
  );
}
