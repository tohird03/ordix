import { AxiosResponse } from 'axios';
import { Endpoints, umsStages } from '../endpoint';
import { Instance } from '../http';
import { IGetStaffsParams, IStaffs } from '../staffs';
import { INetworkConfig, IResponse } from '../types';
import { ICurrency, IAddEditCurrency } from './types';

const config: INetworkConfig = {
  baseURL: Endpoints.Base,
  stageUrl: umsStages.apiUrl,
};

class CurrencyApi extends Instance {
  constructor(config: INetworkConfig) {
    super(config);
  }

  getCurrency = (): Promise<IResponse<ICurrency[]>> =>
    this.get(Endpoints.CurrencyMany);

  currencyEdit = (params: IAddEditCurrency): Promise<AxiosResponse<any>> =>
    this.patch(Endpoints.CurrencyOne, params, { params: { id: params?.id } });

  addNewCurrency = (params: IAddEditCurrency): Promise<AxiosResponse> =>
    this.post(Endpoints.CurrencyOne, params);

  // updateStaff = (params: IUpdateStaff): Promise<AxiosResponse> =>
  //   this.patch(`${Endpoints.StaffOne}`, params, { params: { id: params?.id } });

  // deleteStaff = (id: string): Promise<AxiosResponse> =>
  //   this.delete(`${Endpoints.StaffOne}`, { params: { id } });

  // getSingleStaffs = (staffId: string): Promise<{ data: IStaffs }> =>
  //   this.get(Endpoints.StaffOne, { params: { id: staffId } });
}

export const currencyApi = new CurrencyApi(config);
