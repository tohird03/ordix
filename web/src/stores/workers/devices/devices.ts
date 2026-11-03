import { devicesApi } from '@/shared/api/device';
import { DeviceStatus } from '@/shared/api/device/types';
import { addNotification } from '@/shared/utils/addNotification';
import {makeAutoObservable} from 'mobx';

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
