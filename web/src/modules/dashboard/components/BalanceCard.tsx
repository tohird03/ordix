import { useState } from 'react';
import { ArrowUpOutlined, SwapOutlined } from '@ant-design/icons';
import { Select } from 'antd';
import { totals, wallets } from '../mock';

export default function BalanceCard() {
  const [currency, setCurrency] = useState('UZS');

  return (
    <div className="o-card">
      <div className="row-between">
        <span className="muted">Jami sotuv (shu oy)</span>
        <Select
          size="small"
          variant="filled"
          value={currency}
          onChange={setCurrency}
          options={Object.keys(totals).map((c) => ({ value: c, label: c }))}
          style={{ width: 84 }}
        />
      </div>
      <div className="big-number">
        {totals[currency]} <small>{currency}</small>
      </div>
      <span className="chip up"><ArrowUpOutlined /> 5%</span>{' '}
      <span className="muted">o'tgan oyga nisbatan</span>

      <div className="btn-row">
        <button className="btn-pill btn-dark"><SwapOutlined /> Yangi sotuv</button>
        <button className="btn-pill btn-light"><SwapOutlined /> Kirim</button>
      </div>

      <div className="wallets">
        <b style={{ fontSize: 13 }}>Valyutalar</b>
        <div className="wallet-grid">
          {wallets.map((w) => (
            <div className="wallet" key={w.code}>
              <div className="wallet-code"><span className="wallet-dot" />{w.code}</div>
              <b>{w.amount}</b>
              <small>{w.active ? 'Faol' : 'Nofaol'}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
