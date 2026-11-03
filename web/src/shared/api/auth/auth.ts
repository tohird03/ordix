import type { AxiosResponse } from 'axios';
import type { ILoginForm, ILoginResponse } from './types';
import type { INetworkConfig } from '../types';
import type { IStaff } from '@/stores/profile/types';
import { Endpoints, umsStages } from '../endpoint';
import { Instance } from '../http';

const config: INetworkConfig = {
  baseURL: Endpoints.Base,
  stageUrl: umsStages.apiUrl,
};

class AuthApi extends Instance {
  constructor(config: INetworkConfig) {
    super(config);
  }

  getSignIn = (params: ILoginForm): Promise<ILoginResponse> =>
    this.post(Endpoints.SignIn, params);

  getUserProfile = (): Promise<{ data: IStaff }> =>
    this.get(Endpoints.UserProfile);

  refreshToken = (refreshToken: string): Promise<AxiosResponse> =>
    this.post(Endpoints.RefreshToken, { refreshToken });

  deviceLogin = (deviceToken: string): Promise<ILoginResponse> =>
    this.post(Endpoints.AuthDeviceLogin, { deviceToken });
}

export const authApi = new AuthApi(config);
