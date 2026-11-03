import { AxiosResponse } from 'axios';
import { DeviceStatus, IDevice } from './types';
import { INetworkConfig, IResponse } from '../types';
import { Endpoints, umsStages } from '../endpoint';
import { Instance } from '../http';

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
