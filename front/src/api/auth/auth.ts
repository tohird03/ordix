import { AxiosResponse } from 'axios';
import { IStaff } from '@/stores/profile/types';
import { Endpoints, umsStages } from '../endpoints';
import { INetworkConfig, Instance } from '../instance';
import { ILoginForm, ILoginResponse } from './types';
import { IResponse } from '../types';

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
