import {authStore} from './auth';
import {profileStore} from './profile';
import {staffsStore, devicesStore, currencyStore} from './workers';
import { clientsInfoStore } from './clients-info';

export const stores = {
  authStore,
  profileStore,
  staffsStore,
  devicesStore,
  currencyStore,
  clientsInfoStore,
};

export const resetStores = () => {
  authStore.reset();
  profileStore.reset();
  staffsStore.reset();
  devicesStore.reset();
  currencyStore.reset();
  clientsInfoStore.reset();
};
