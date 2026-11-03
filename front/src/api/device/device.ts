import { AxiosResponse } from 'axios';
import { IStaff } from '@/stores/profile/types';
import { Endpoints, umsStages } from '../endpoints';
import { INetworkConfig, Instance } from '../instance';
import { DeviceStatus, IDevice } from './types';
import { IResponse } from '../types';

const config: INetworkConfig = {
  baseURL: Endpoints.Base,
  stageUrl: umsStages.apiUrl,
};

class DevicesApi extends Instance {
  constructor(config: INetworkConfig) {
    super(config);
  }

  getDevices = (status?: DeviceStatus | null): Promise<IResponse<IDevice[]>> =>
    this.get('/devices', { params: status ? { status } : undefined });

  approve = (id: string): Promise<AxiosResponse> => this.patch(`/devices/${id}/approve`);
  reject = (id: string): Promise<AxiosResponse> => this.patch(`/devices/${id}/reject`);
  block = (id: string): Promise<AxiosResponse> => this.patch(`/devices/${id}/block`);
  activate = (id: string): Promise<AxiosResponse> => this.patch(`/devices/${id}/activate`);
  revoke = (id: string): Promise<AxiosResponse> => this.patch(`/devices/${id}/revoke`);
}

export const devicesApi = new DevicesApi(config);
