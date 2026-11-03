
import React, { useCallback, useEffect, useState } from 'react';
import {
  Alert,
  Button,
  Card,
  Empty,
  message,
  Popconfirm,
  Select,
  Space,
  Table,
  Tag,
  Tooltip,
  Typography,
} from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
  CheckOutlined,
  CloseOutlined,
  ReloadOutlined,
  StopOutlined,
  UnlockOutlined,
} from '@ant-design/icons';

import { DeviceStatus, IDevice } from '@/api/device/types';
import { devicesStore } from '@/stores/workers';
import { devicesApi } from '@/api/device';
import { observer } from 'mobx-react';

const { Title, Text } = Typography;

const STATUS_OPTIONS = [
  { label: 'Barchasi', value: 'ALL' },
  { label: 'Kutilmoqda', value: DeviceStatus.PENDING },
  { label: 'Tasdiqlangan', value: DeviceStatus.APPROVED },
  { label: 'Rad etilgan', value: DeviceStatus.REJECTED },
  { label: 'Bloklangan', value: DeviceStatus.BLOCK },
];

const STATUS_CONFIG: Record<DeviceStatus, { label: string, color: string }> = {
  [DeviceStatus.PENDING]: {
    label: 'Kutilmoqda',
    color: 'processing',
  },
  [DeviceStatus.APPROVED]: {
    label: 'Tasdiqlangan',
    color: 'success',
  },
  [DeviceStatus.REJECTED]: {
    label: 'Rad etilgan',
    color: 'error',
  },
  [DeviceStatus.BLOCK]: {
    label: 'Bloklangan',
    color: 'warning',
  },
};

const formatDate = (value?: string) => {
  if (!value) return '—';

  const date = new Date(value);

  if (Number.isNaN(date.getTime())) return '—';

  return date.toLocaleString('uz-UZ', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
  });
};

const getDeviceName = (record: IDevice) => (
  record.deviceName ||
  record.name ||
  record.deviceType ||
  record.type ||
  'Noma’lum qurilma');

const getStaffName = (record: IDevice) => {
  const staff = record.employee;

  if (!staff) return '—';

  return (
    staff.fullName ||
    [staff.firstName].filter(Boolean).join(' ') ||
    staff.phone ||
    '—'
  );
};

export const DevicesPage = observer(() => {
  const [devices, setDevices] = useState<IDevice[]>([]);
  const [statusFilter, setStatusFilter] = useState<DeviceStatus | 'ALL'>('ALL');

  const [loading, setLoading] = useState(false);
  const [actionId, setActionId] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const loadDevices = () => {
    setLoading(true);
    setError(null);

    devicesStore.getDevices(null)
      .then(res => {
        console.log(res?.data);

        setDevices(res?.data?.data || []);
        setLoading(false);
      })
      .catch(err => console.log(err));

  };

  useEffect(() => {
    loadDevices();
  }, []);

  const handleAction = async (
    id: string,
    action: 'approve' | 'reject' | 'block' | 'activate'
  ) => {
    setActionId(id);

    try {
      switch (action) {
        case 'approve':
          await devicesApi.approve(id);
          message.success('Qurilma tasdiqlandi');
          break;

        case 'reject':
          await devicesApi.reject(id);
          message.success('Qurilma rad etildi');
          break;

        case 'block':
          await devicesApi.block(id);
          message.success('Qurilma bloklandi');
          break;

        case 'activate':
          await devicesApi.activate(id);
          message.success('Qurilma faollashtirildi');
          break;
      }

      await loadDevices();
    } catch (err) {
      console.error(`Device ${action} error:`, err);
      message.error('Amalni bajarishda xatolik yuz berdi.');
    } finally {
      setActionId(null);
    }
  };

  const columns: ColumnsType<IDevice> = [
    {
      title: 'ID',
      dataIndex: 'id',
      key: 'id',
      render: (id: number) => <Text type="secondary">#{id}</Text>,
    },
    {
      title: 'Xodim',
      key: 'staff',
      render: (_, record) => (
        <Space direction="vertical" size={2}>
          <Text strong>{getStaffName(record)}</Text>
          {record.employee?.phone && (
            <Text type="secondary">{record.employee.phone}</Text>
          )}
        </Space>
      ),
    },
    {
      title: 'Qurilma',
      key: 'device',
      render: (_, record) => (
        <Space direction="vertical" size={2}>
          <Text>{getDeviceName(record)}</Text>
          {record.userAgent && (
            <Tooltip title={record.userAgent}>
              <Text
                type="secondary"
                ellipsis
                style={{ maxWidth: 220 }}
              >
                {record.userAgent}
              </Text>
            </Tooltip>
          )}
        </Space>
      ),
    },
    {
      title: 'IP manzil',
      dataIndex: 'ipAddress',
      key: 'ipAddress',
      render: (ip?: string) => ip || '—',
    },
    {
      title: 'Holati',
      dataIndex: 'status',
      key: 'status',
      render: (status: DeviceStatus) => {
        const config = STATUS_CONFIG[status];

        return config ? (
          <Tag color={config.color}>{config.label}</Tag>
        ) : (
          <Tag>{status}</Tag>
        );
      },
    },
    {
      title: 'Ro‘yxatdan o‘tgan',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date?: string) => formatDate(date),
    },
    {
      title: 'Amallar',
      key: 'actions',
      render: (_, record) => {
        const busy = actionId === record.id;

        return (
          <Space size="small" wrap>
            {record.status === DeviceStatus.PENDING && (
              <>
                <Tooltip title="Tasdiqlash">
                  <Popconfirm
                    title="Qurilmani tasdiqlaysizmi?"
                    onConfirm={() =>
                      handleAction(record.id, 'approve')
                    }
                    okText="Ha"
                    cancelText="Yo‘q"
                  >
                    <Button
                      type="primary"
                      size="small"
                      icon={<CheckOutlined />}
                      loading={busy}
                    />
                  </Popconfirm>
                </Tooltip>

                <Tooltip title="Rad etish">
                  <Popconfirm
                    title="Qurilmani rad etasizmi?"
                    onConfirm={() =>
                      handleAction(record.id, 'reject')
                    }
                    okText="Ha"
                    cancelText="Yo‘q"
                  >
                    <Button
                      danger
                      size="small"
                      icon={<CloseOutlined />}
                      loading={busy}
                    />
                  </Popconfirm>
                </Tooltip>
              </>
            )}

            {record.status === DeviceStatus.APPROVED && (
              <Tooltip title="Bloklash">
                <Popconfirm
                  title="Qurilmani bloklaysizmi?"
                  onConfirm={() =>
                    handleAction(record.id, 'block')
                  }
                  okText="Bloklash"
                  cancelText="Bekor qilish"
                >
                  <Button
                    danger
                    size="small"
                    icon={<StopOutlined />}
                    loading={busy}
                  />
                </Popconfirm>
              </Tooltip>
            )}

            {(record.status === DeviceStatus.BLOCK ||
              record.status === DeviceStatus.REJECTED) &&
              (
                <Tooltip title="Qayta faollashtirish">
                  <Popconfirm
                    title="Qurilmani qayta faollashtirasizmi?"
                    onConfirm={() =>
                      handleAction(record.id, 'activate')
                    }
                    okText="Faollashtirish"
                    cancelText="Bekor qilish"
                  >
                    <Button
                      type="primary"
                      ghost
                      size="small"
                      icon={<UnlockOutlined />}
                      loading={busy}
                    />
                  </Popconfirm>
                </Tooltip>
              )}
          </Space>
        );
      },
    },
  ];

  const counts = {
    total: devices.length,
    pending: devices.filter(
      (item) => item.status === DeviceStatus.PENDING
    ).length,
    approved: devices.filter(
      (item) => item.status === DeviceStatus.APPROVED
    ).length,
    blocked: devices.filter(
      (item) => item.status === DeviceStatus.BLOCK
    ).length,
    rejected: devices.filter(
      (item) => item.status === DeviceStatus.REJECTED
    ).length,
  };

  return (
    <div style={{ padding: 24 }}>
      <Space
        align="center"
        style={{
          width: '100%',
          justifyContent: 'space-between',
          marginBottom: 24,
        }}
      >
        <div>
          <Title level={3} style={{ margin: 0 }}>
            Qurilmalar
          </Title>
          <Text type="secondary">
            Xodimlar qurilmalarini boshqarish
          </Text>
        </div>

        <Button
          icon={<ReloadOutlined />}
          onClick={() => void loadDevices()}
          loading={loading}
        >
          Yangilash
        </Button>
      </Space>

      {error && (
        <Alert
          type="error"
          showIcon
          message={error}
          action={
            <Button
              size="small"
              onClick={() => void loadDevices()}
            >
              Qayta urinish
            </Button>
          }
          style={{ marginBottom: 16 }}
        />
      )}

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
          gap: 16,
          marginBottom: 24,
        }}
      >
        <Card size="small">
          <Text type="secondary">Jami qurilmalar</Text>
          <Title level={3}>{counts.total}</Title>
        </Card>

        <Card size="small">
          <Text type="secondary">Kutilmoqda</Text>
          <Title level={3}>{counts.pending}</Title>
        </Card>

        <Card size="small">
          <Text type="secondary">Tasdiqlangan</Text>
          <Title level={3}>{counts.approved}</Title>
        </Card>

        <Card size="small">
          <Text type="secondary">Bloklangan</Text>
          <Title level={3}>{counts.blocked}</Title>
        </Card>

        <Card size="small">
          <Text type="secondary">Rad etilgan</Text>
          <Title level={3}>{counts.rejected}</Title>
        </Card>
      </div>

      <Card>
        <Space
          style={{
            width: '100%',
            justifyContent: 'space-between',
            marginBottom: 20,
          }}
          wrap
        >
          <Title level={5} style={{ margin: 0 }}>
            Qurilmalar ro‘yxati
          </Title>

          <Select
            value={statusFilter}
            options={STATUS_OPTIONS}
            onChange={(value: DeviceStatus | 'ALL') =>
              setStatusFilter(value)
            }
            style={{ width: 200 }}
            placeholder="Holatni tanlang"
          />
        </Space>

        <Table<IDevice>
          rowKey="id"
          columns={columns}
          dataSource={devices}
          loading={loading}
          scroll={{ x: 900 }}
          locale={{
            emptyText: <Empty description="Qurilmalar topilmadi" />,
          }}
          pagination={{
            pageSize: 10,
            showSizeChanger: true,
            pageSizeOptions: [10, 20, 50, 100],
            showTotal: (total) => `Jami: ${total} ta qurilma`,
          }}
        />
      </Card>
    </div>
  );
});

export default DevicesPage;
