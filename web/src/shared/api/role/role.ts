import { Endpoints, umsStages } from '../endpoint';
import { Instance } from '../http';
import { INetworkConfig, IResponse } from '../types';
import { IRole } from './types';
import { IPemissions } from '@/stores/profile/types';

const config: INetworkConfig = {
  baseURL: Endpoints.Base,
  stageUrl: umsStages.apiUrl,
};


class RoleApi extends Instance {
  constructor(config: INetworkConfig) {
    super(config);
  }

  getAllRoles = (): Promise<IResponse<IRole[]>> =>
    this.get(Endpoints.Role);

  getAllPermissions = (): Promise<IResponse<IPemissions[]>> =>
    this.get(Endpoints.PermissionsMany);
}

export const roleApi = new RoleApi(config);
