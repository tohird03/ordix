import { http } from '../../../shared/api/http';
import type { CurrencyInput, ICurrency } from '../types';

export const currenciesApi = {
  list: () => http.get<ICurrency[]>('/currencies').then((r) => r.data),
  create: (input: CurrencyInput) => http.post<ICurrency>('/currencies', input).then((r) => r.data),
  update: (id: string, input: Partial<CurrencyInput>) =>
    http.patch<ICurrency>(`/currencies/${id}`, input).then((r) => r.data),
  remove: (id: string) => http.delete<{ id: string }>(`/currencies/${id}`).then((r) => r.data),
};
