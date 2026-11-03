import { income } from '../mock';

const ticks = ['100', '75', '50', '25', '0'];

export default function IncomeCard() {
  return (
    <div className="o-card">
      <div className="card-title">Jami daromad</div>
      <div className="muted">Tanlangan davr uchun daromadingizni ko'ring</div>

      <div className="chart-panel">
        <div className="row-between">
          <b style={{ fontSize: 12 }}>Foyda va zarar</b>
          <div className="legend">
            <span className="dot profit-dot" /> Foyda <span className="dot loss-dot" /> Zarar
          </div>
        </div>
        <div className="plot">
          <div className="yaxis">
            {ticks.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <div className="bars">
            {income.map((m) => (
              <div className="bar-col" key={m.month}>
                <div className="stack">
                  <div className="seg-profit" style={{ height: `${m.profit}%` }} title={`Foyda: ${m.profit}`} />
                  <div className="seg-loss" style={{ height: `${m.loss}%` }} title={`Zarar: ${m.loss}`} />
                </div>
                {m.month}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
