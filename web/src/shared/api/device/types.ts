import { IStaffs } from '../staffs';

export enum DeviceStatus {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  BLOCK = 'BLOCK',
}

export enum DeviceType {
  WEB = 'WEB',
  MOBILE = 'MOBILE',
  DESKTOP = 'DESKTOP',
}

export interface IDevice {
  id: string;
  status: DeviceStatus;
  type?: DeviceType;
  deviceType?: DeviceType;
  deviceName?: string;
  name?: string;
  ipAddress?: string;
  userAgent?: string;
  createdAt?: string;
  updatedAt?: string;
  employee?: IStaffs;
}

export interface IDevicesResponse {
  data: IDevice[];
}
