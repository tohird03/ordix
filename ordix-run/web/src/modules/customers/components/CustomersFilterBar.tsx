import { PlusOutlined, SearchOutlined } from '@ant-design/icons';
import { Button, Col, Input, Row, Select } from 'antd';

export type DebtFilter = 'all' | 'debt';

interface Props {
  search: string;
  debtFilter: DebtFilter;
  onSearchChange: (value: string) => void;
  onDebtFilterChange: (value: DebtFilter) => void;
  onCreate: () => void;
}

export default function CustomersFilterBar({
  search,
  debtFilter,
  onSearchChange,
  onDebtFilterChange,
  onCreate,
}: Props) {
  return (
    <Row gutter={[12, 12]}>
      <Col xs={24} md={10} lg={8}>
        <Input
          allowClear
          prefix={<SearchOutlined />}
          placeholder="Ism yoki telefon bo'yicha qidirish"
          value={search}
          onChange={(e) => onSearchChange(e.target.value)}
        />
      </Col>
      <Col xs={12} md={6} lg={5}>
        <Select<DebtFilter>
          style={{ width: '100%' }}
          value={debtFilter}
          onChange={onDebtFilterChange}
          options={[
            { value: 'all', label: 'Barcha mijozlar' },
            { value: 'debt', label: 'Qarzdorlar' },
          ]}
        />
      </Col>
      <Col xs={12} md={8} lg={11} style={{ textAlign: 'right' }}>
        <Button type="primary" icon={<PlusOutlined />} onClick={onCreate}>
          Mijoz qo'shish
        </Button>
      </Col>
    </Row>
  );
}
