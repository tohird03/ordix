import { TStage } from './types';
export const stage = 'dev';

export enum Endpoints {
  Base = '',
  CloseDay = '/common/day-close',
  RefreshToken = '/dashboard-auth/refresh',
  AuthDeviceLogin = '/auth/device-login',
  Role = '/role',
  SignIn = '/auth/sign-in',
  UserProfile = '/auth/profile',
  PermissionsMany = '/permission/many',

  // STAFFS
  StaffsMany = '/staff/many',
  StaffOne = '/staff/one',

  // CURRENCY
  CurrencyMany = '/currency/many',
  CurrencyOne = '/currency/one'
}

const config: Record<string, TStage> = {
  dev: {
    // apiUrl: 'https://tmp.16.170.250.134.nip.io',
    apiUrl: 'http://localhost:3000',
  },
  prod: {
    // apiUrl: 'https://tmp.16.170.250.134.nip.io',
    apiUrl: 'http://localhost:3000',
  },
};

const imgConfig: Record<string, TStage> = {
  dev: {
    apiUrl: 'https://minio.mydevops.uz/',
  },
  prod: {
    apiUrl: 'https://minio.mydevops.uz/',
  },
};


export const umsStages = config[stage];
export const imgStages = imgConfig[stage];
