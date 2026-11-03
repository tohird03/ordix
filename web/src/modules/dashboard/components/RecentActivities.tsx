import { useMemo, useState } from 'react';
import {
  FilterOutlined,
  InboxOutlined,
  RollbackOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { Input, Select, Table } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import { activities, type Activity, type ActivityType } from '../mock';

const icons: Record<ActivityType, JSX.Element> = {
  sale: <ShoppingCartOutlined />,
  purchase: <InboxOutlined />,
  return: <RollbackOutlined />,
};
const colors: Record<ActivityType, string> = { sale: '#f2622b', purchase: '#4a4a52', return: '#8c8c94' };

const columns: ColumnsType<Activity> = [
  { title: 'Hujjat', dataIndex: 'id' },
  {
    title: 'Amal',
    dataIndex: 'action',
    render: (a: string, r) => (
      <span>
        <span className="act-ico" style={{ background: colors[r.type] }}>{icons[r.type]}</span>
        {a}
      </span>
    ),
  },
  { title: 'Summa', dataIndex: 'amount' },
  {
    title: 'Holat',
    dataIndex: 'status',
    render: (s: Activity['status']) => (
      <span><span className={`status-dot ${s}`} />{s === 'done' ? 'Bajarildi' : 'Kutilmoqda'}</span>
    ),
  },
  { title: 'Sana', dataIndex: 'date', responsive: ['md'] },
];

export default function RecentActivities() {
  const [q, setQ] = useState('');
  const [status, setStatus] = useState('all');
  const data = useMemo(
    () =>
      activities.filter(
        (a) =>
          (status === 'all' || a.status === status) &&
          `${a.id} ${a.action}`.toLowerCase().includes(q.trim().toLowerCase()),
      ),
    [q, status],
  );

  return (
    <div className="o-card">
      <div className="act-head">
        <div className="card-title">Oxirgi amallar</div>
        <div className="act-tools">
          <Input
            allowClear
            variant="filled"
            style={{ width: 180, borderRadius: 999 }}
            prefix={<SearchOutlined />}
            placeholder="Qidirish"
            value={q}
            onChange={(e) => setQ(e.target.value)}
          />
          <Select
            variant="borderless"
            value={status}
            onChange={setStatus}
            suffixIcon={<FilterOutlined />}
            style={{ width: 130 }}
            options={[
              { value: 'all', label: 'Barchasi' },
              { value: 'done', label: 'Bajarildi' },
              { value: 'pending', label: 'Kutilmoqda' },
            ]}
          />
        </div>
      </div>
      <Table<Activity> rowKey="id" size="small" columns={columns} dataSource={data} pagination={false} scroll={{ x: 560 }} />
    </div>
  );
}
