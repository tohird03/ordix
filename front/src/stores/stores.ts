import {authStore} from './auth';
import {profileStore} from './profile';
import {staffsStore, devicesStore} from './workers';

export const stores = {
  authStore,
  profileStore,
  staffsStore,
  devicesStore,
};

export const resetStores = () => {
  authStore.reset();
  profileStore.reset();
  staffsStore.reset();
  devicesStore.reset();
};
