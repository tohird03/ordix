import { http } from '../../../shared/api/http';
import type { CustomerInput, CustomerListResponse, CustomerQuery, ICustomer } from '../types';

export const customersApi = {
  list: (q: CustomerQuery) =>
    http
      .get<CustomerListResponse>('/customers', {
        params: { ...q, search: q.search || undefined, hasDebt: q.hasDebt || undefined },
      })
      .then((r) => r.data),
  create: (input: CustomerInput) => http.post<ICustomer>('/customers', input).then((r) => r.data),
  update: (id: string, input: Partial<Omit<CustomerInput, 'debt'>>) =>
    http.patch<ICustomer>(`/customers/${id}`, input).then((r) => r.data),
  remove: (id: string) => http.delete<{ id: string }>(`/customers/${id}`).then((r) => r.data),
};
