import { AxiosResponse } from 'axios';
import { INetworkConfig, IResponse } from '../types';
import { IAddStaff, IGetStaffsParams, IStaffs, IUpdateStaff } from './types';
import { Endpoints, umsStages } from '../endpoint';
import { Instance } from '../http';

const config: INetworkConfig = {
  baseURL: Endpoints.Base,
  stageUrl: umsStages.apiUrl,
};

class StaffsApi extends Instance {
  constructor(config: INetworkConfig) {
    super(config);
  }

  getStaffs = (params: IGetStaffsParams): Promise<IResponse<IStaffs[]>> =>
    this.get(Endpoints.StaffsMany, { params });

  addNewStaff = (params: IAddStaff): Promise<AxiosResponse> =>
    this.post(Endpoints.StaffOne, params);

  updateStaff = (params: IUpdateStaff): Promise<AxiosResponse> =>
    this.patch(`${Endpoints.StaffOne}`, params, { params: { id: params?.id } });

  deleteStaff = (id: string): Promise<AxiosResponse> =>
    this.delete(`${Endpoints.StaffOne}`, { params: { id } });

  getSingleStaffs = (staffId: string): Promise<{ data: IStaffs }> =>
    this.get(Endpoints.StaffOne, { params: { id: staffId } });
}

export const staffsApi = new StaffsApi(config);
