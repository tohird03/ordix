import { limit } from '../mock';

export default function SpendingLimitCard() {
  return (
    <div className="o-card">
      <div className="card-title" style={{ fontSize: 14 }}>Oylik sotuv rejasi</div>
      <div className="limit-track">
        <div className="limit-fill" style={{ width: `${limit.percent}%` }} />
      </div>
      <div className="row-between">
        <b style={{ fontSize: 12 }}>{limit.spent} <span className="muted">so'm</span></b>
        <b style={{ fontSize: 12 }}>{limit.max}</b>
      </div>
    </div>
  );
}
