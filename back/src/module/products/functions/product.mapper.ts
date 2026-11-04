import type { ICurrencyDto, IProduct, IProductPrice, IProductTotalCalc } from './product.types.js';

type Money = { toString(): string };

interface CurrencyRow {
  id: string;
  name: string;
  symbol: string;
  exchangeRate: number;
  isDefault: boolean;
}

export interface ProductRow {
  id: string;
  name: string;
  description: string | null;
  image: string | null;
  count: number;
  minAmount: number;
  createdAt: Date;
  costPrice: Money;
  costCurrency: CurrencyRow;
  salePrice: Money;
  saleCurrency: CurrencyRow;
  wholesalePrice: Money;
  wholesaleCurrency: CurrencyRow;
  lastSellingDate: Date | null;
  lastSellingPrice: Money | null;
  lastSellingCount: number | null;
}

export const round2 = (n: number) => Math.round(n * 100) / 100;
const num = (v: Money) => Number(v.toString());

const toCurrency = (c: CurrencyRow): ICurrencyDto => ({
  id: c.id,
  name: c.name,
  symbol: c.symbol,
  exchangeRate: c.exchangeRate,
  isDefault: c.isDefault,
});

const toPrice = (price: Money, currency: CurrencyRow, count: number): IProductPrice => ({
  price: round2(num(price)),
  totalPrice: round2(num(price) * count),
  currency: toCurrency(currency),
});

export const toDto = (p: ProductRow): IProduct => {
  const sold =
    p.lastSellingDate !== null && p.lastSellingPrice !== null && p.lastSellingCount !== null;
  const lastDate = sold ? p.lastSellingDate!.toISOString() : '';

  return {
    id: p.id,
    name: p.name,
    count: p.count,
    minAmount: p.minAmount,
    createdAt: p.createdAt.toISOString(),
    prices: {
      cost: toPrice(p.costPrice, p.costCurrency, p.count),
      selling: toPrice(p.salePrice, p.saleCurrency, p.count),
      wholesale: toPrice(p.wholesalePrice, p.wholesaleCurrency, p.count),
    },
    image: p.image ?? '',
    lastSellingDate: lastDate,
    description: p.description ?? '',
    lastSelling: {
      date: lastDate,
      price: sold ? round2(num(p.lastSellingPrice!)) : 0,
      count: sold ? p.lastSellingCount! : 0,
    },
  };
};

// joriy sahifadagi mahsulotlar yig'indisi (UZS da: narx × son × valyuta kursi)
export const calcPage = (items: IProduct[]): IProductTotalCalc['calcPage'] => {
  const sum = (pick: (i: IProduct) => IProductPrice) =>
    round2(items.reduce((acc, i) => acc + pick(i).totalPrice * pick(i).currency.exchangeRate, 0));

  return {
    totalPrice: sum((i) => i.prices.selling),
    totalCost: sum((i) => i.prices.cost),
    totalCount: items.reduce((acc, i) => acc + i.count, 0),
  };
};
