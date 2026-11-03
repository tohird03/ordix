import { makeAutoObservable, runInAction } from 'mobx';
import { getErrorMessage } from '../../../shared/api/error';
import { currenciesApi } from '../api/currencies.api';
import type { CurrencyInput, ICurrency } from '../types';

class CurrenciesStore {
  items: ICurrency[] = [];
  loading = false;
  error: string | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  async fetch() {
    this.loading = true;
    this.error = null;
    try {
      const data = await currenciesApi.list();
      runInAction(() => {
        this.items = data;
      });
    } catch (e) {
      runInAction(() => {
        this.error = getErrorMessage(e);
      });
    } finally {
      runInAction(() => {
        this.loading = false;
      });
    }
  }

  // create / update / remove xatoni tashqariga uzatadi, sahifa uni xabar qilib ko'rsatadi
  async create(input: CurrencyInput) {
    const created = await currenciesApi.create(input);
    runInAction(() => {
      this.items.push(created);
    });
  }

  async update(id: string, input: Partial<CurrencyInput>) {
    const updated = await currenciesApi.update(id, input);
    runInAction(() => {
      this.items = this.items.map((c) => (c.id === id ? updated : c));
    });
  }

  async remove(id: string) {
    await currenciesApi.remove(id);
    runInAction(() => {
      this.items = this.items.filter((c) => c.id !== id);
    });
  }
}

export const currenciesStore = new CurrenciesStore();
