export interface ICurrency {
  id: string;
  name: string;
  symbol: 'UZS' | 'USD';
  exchangeRate: number;
}

export type IAddEditCurrency = {
  id?: string;
  name: string;
  exchangeRate: number;
}

export interface ICurrencyOptions {
  value: string;
  label: string;
  code: string;
  rate: number;
}
