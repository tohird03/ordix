import {
  DollarOutlined,
  InboxOutlined,
  RollbackOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import { stats } from '../mock';

const icons = [<ShoppingCartOutlined />, <InboxOutlined />, <DollarOutlined />, <RollbackOutlined />];

export default function StatsGrid() {
  return (
    <div className="o-card" style={{ padding: 12 }}>
      <div className="stat-grid">
        {stats.map((s, i) => (
          <div className={`tile${s.hot ? ' hot' : ''}`} key={s.title}>
            <div className="row-between">
              <span className="muted">{s.title}</span>
              <span className="tile-ico">{icons[i]}</span>
            </div>
            <div className="tile-value">{s.value}</div>
            <div>
              <span className={`chip ${s.change >= 0 ? 'up' : 'down'}`}>
                {s.change >= 0 ? '▲' : '▼'} {Math.abs(s.change)}%
              </span>{' '}
              <span className="muted">shu oy</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
