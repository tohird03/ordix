import {authStore} from './auth';
import {profileStore} from './profile';
import {staffsStore, devicesStore, currencyStore} from './workers';

export const stores = {
  authStore,
  profileStore,
  staffsStore,
  devicesStore,
  currencyStore,
};

export const resetStores = () => {
  authStore.reset();
  profileStore.reset();
  staffsStore.reset();
  devicesStore.reset();
  currencyStore.reset();
};
