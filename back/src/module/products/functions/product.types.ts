export interface ICurrencyDto {
  id: string;
  name: string;
  symbol: string;
  exchangeRate: number;
  isDefault: boolean;
}

export interface IProductPrice {
  price: number;
  totalPrice: number; // count × price (narxning o'z valyutasida)
  currency: ICurrencyDto;
}

export interface IProduct {
  id: string;
  name: string;
  count: number;
  minAmount: number;
  createdAt: string;
  prices: {
    cost: IProductPrice;
    selling: IProductPrice;
    wholesale: IProductPrice;
  };
  image: string;
  lastSellingDate: string;
  description: string;
  lastSelling: { date: string; price: number; count: number };
}

export interface IProductTotalCalc {
  calcPage: { totalPrice: number; totalCost: number; totalCount: number };
  calcTotal: {
    totalPrice: number;
    totalCost: number;
    totalWholesale: number;
    totalCount: number;
  };
}
