import {makeAutoObservable} from 'mobx';
import {addNotification} from '@/utils';
import { devicesApi } from '@/api/device';
import { DeviceStatus } from '@/api/device/types';

class DevicesStore {

  constructor() {
    makeAutoObservable(this);
  }

  getDevices = (status: DeviceStatus | null) =>
    devicesApi
      .getDevices(status)
      .then((res) => res)
      .catch((err) => {
        console.error('getDevices error:', err);
        addNotification(err);
        throw err; // sahifadagi catch ishlashi uchun
      });


  reset = () => {
  };
}

export const devicesStore = new DevicesStore();
