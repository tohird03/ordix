import { makeAutoObservable } from 'mobx';
import { ICurrency } from '@/shared/api/currency/types';
import { currencyApi } from '@/shared/api/currency/currency';
import { addNotification } from '@/shared/utils/addNotification';

class CurrencyStore {
  isOpenEditCurrency = false;
  singleCurrency: ICurrency | null = null;

  constructor() {
    makeAutoObservable(this);
  }

  getCurrency = () =>
    currencyApi.getCurrency()
      .then(res => res)
      .catch(addNotification);

  setIsOpenEditCurrencyModal = (isOpenEditCurrency: boolean) => {
    this.isOpenEditCurrency = isOpenEditCurrency;
  };

  setSingleCurrency = (singleCurrency: ICurrency | null) => {
    this.singleCurrency = singleCurrency;
  };

  reset = () => {
    this.isOpenEditCurrency = false;
  };
}

export const currencyStore = new CurrencyStore();
