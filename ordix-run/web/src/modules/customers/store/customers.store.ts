import { makeAutoObservable, runInAction } from 'mobx';
import { getErrorMessage } from '../../../shared/api/error';
import { customersApi } from '../api/customers.api';
import type { CustomerInput, ICustomer } from '../types';

class CustomersStore {
  items: ICustomer[] = [];
  total = 0;
  pageNumber = 1;
  pageSize = 20;
  search = '';
  hasDebt = false;
  loading = false;
  error: string | null = null;
  private requestId = 0;

  constructor() {
    makeAutoObservable(this);
  }

  setSearch(value: string) {
    this.search = value;
    this.pageNumber = 1;
  }

  setHasDebt(value: boolean) {
    this.hasDebt = value;
    this.pageNumber = 1;
  }

  setPage(page: number) {
    this.pageNumber = page;
  }

  async fetch() {
    const id = ++this.requestId; // eski so'rov natijasi yangisini bosib ketmasligi uchun
    this.loading = true;
    this.error = null;
    try {
      const res = await customersApi.list({
        pageNumber: this.pageNumber,
        pageSize: this.pageSize,
        search: this.search.trim(),
        hasDebt: this.hasDebt,
      });
      if (id !== this.requestId) return;
      runInAction(() => {
        this.items = res.items;
        this.total = res.total;
      });
    } catch (e) {
      if (id !== this.requestId) return;
      runInAction(() => {
        this.error = getErrorMessage(e);
      });
    } finally {
      if (id === this.requestId) {
        runInAction(() => {
          this.loading = false;
        });
      }
    }
  }

  // create / update / remove xatoni tashqariga uzatadi, sahifa uni xabar qilib ko'rsatadi
  async create(input: CustomerInput) {
    await customersApi.create(input);
    await this.fetch();
  }

  async update(id: string, input: Partial<Omit<CustomerInput, 'debt'>>) {
    await customersApi.update(id, input);
    await this.fetch();
  }

  async remove(id: string) {
    await customersApi.remove(id);
    // oxirgi sahifadagi oxirgi mijoz o'chirilsa, bitta sahifa orqaga
    if (this.items.length === 1 && this.pageNumber > 1) this.pageNumber -= 1;
    await this.fetch();
  }
}

export const customersStore = new CustomersStore();
