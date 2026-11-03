export interface ICurrency {
  id: string;
  name: string;
  symbol: string; // valyuta kodi: USD, UZS
  exchangeRate: number; // 1 birlik necha so'm (butun son)
}

export type CurrencyInput = Omit<ICurrency, 'id'>;

// Asosiy valyuta: kursi doim 1, o'chirib ham o'zgartirib ham bo'lmaydi
export const DEFAULT_CURRENCY_SYMBOL = 'UZS';
