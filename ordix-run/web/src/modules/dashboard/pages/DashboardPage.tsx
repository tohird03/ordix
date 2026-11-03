import { Col, Row } from 'antd';
import BalanceCard from '../components/BalanceCard';
import IncomeCard from '../components/IncomeCard';
import RecentActivities from '../components/RecentActivities';
import SpendingLimitCard from '../components/SpendingLimitCard';
import StatsGrid from '../components/StatsGrid';
import '../dashboard.css';

function greeting() {
  const h = new Date().getHours();
  if (h < 12) return 'Xayrli tong';
  if (h < 18) return 'Xayrli kun';
  return 'Xayrli kech';
}

export default function DashboardPage() {
  return (
    <>
      <h1 className="greeting">{greeting()}, Admin</h1>
      <p className="greeting-sub">Vazifalaringiz, savdo holati va qarzlarni kuzatib boring.</p>

      <Row gutter={[16, 16]}>
        <Col xs={24} xl={8}><BalanceCard /></Col>
        <Col xs={24} xl={8}><StatsGrid /></Col>
        <Col xs={24} xl={8}><IncomeCard /></Col>
        <Col xs={24} xl={8}><SpendingLimitCard /></Col>
        <Col xs={24} xl={16}><RecentActivities /></Col>
      </Row>
    </>
  );
}
