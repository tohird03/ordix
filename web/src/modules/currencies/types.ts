import { ICurrency } from "@/shared/api/currency/types";

export type CurrencyInput = Omit<ICurrency, 'id'>;

// Asosiy valyuta: kursi doim 1, o'chirib ham o'zgartirib ham bo'lmaydi
export const DEFAULT_CURRENCY_SYMBOL = 'UZS';
