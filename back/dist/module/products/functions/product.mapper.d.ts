import type { IProduct, IProductTotalCalc } from './product.types.js';
type Money = {
    toString(): string;
};
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
export declare const round2: (n: number) => number;
export declare const toDto: (p: ProductRow) => IProduct;
export declare const calcPage: (items: IProduct[]) => IProductTotalCalc["calcPage"];
export {};
