import { AxiosResponse } from 'axios';
import { INetworkConfig, IResponse } from '../types';
import {
  IAddEditClientInfo,
  IClientStatistic,
  IClientsInfo,
  IGetClientDeedExcelParams,
  IGetClientsInfoParams,
  IGetClientsStatisticParams,
  IGetSingleClientParams,
} from './types';
import { Endpoints, umsStages } from '../endpoint';
import { Instance } from '../http';

const config: INetworkConfig = {
  baseURL: Endpoints.Base,
  stageUrl: umsStages.apiUrl,
};

class ClientsInfoApi extends Instance {
  constructor(config: INetworkConfig) {
    super(config);
  }

  getClientsInfo = (params: IGetClientsInfoParams): Promise<IResponse<IClientsInfo[]>> =>
    this.get(Endpoints.ClientsMany, { params });

  addClients = (params: IAddEditClientInfo): Promise<AxiosResponse> =>
    this.post(Endpoints.ClientsOne, params);

  updateClient = (params: IAddEditClientInfo): Promise<AxiosResponse> =>
    this.patch(`${Endpoints.ClientsOne}`, params, { params: { id: params?.id } });

  deleteClient = (id: string): Promise<AxiosResponse> =>
    this.delete(`${Endpoints.ClientsOne}`, { params: { id } });

  getSingleClient = (params: IGetSingleClientParams): Promise<{ data: IClientsInfo }> =>
    this.get(Endpoints.ClientsOne, { params });

  // getClientsStatistic = (params: IGetClientsStatisticParams): Promise<IResponse<IClientStatistic[]>> =>
  //   this.get(Endpoints.ClientsStatistic, { params: {...params, debtType: 'gt'} });

  // getUploadClients = (params: IGetClientsInfoParams): Promise<any> =>
  //   this.get(Endpoints.UploadClient, {
  //     params,
  //     responseType: 'arraybuffer',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/xlsx',
  //     },
  //   });

  // getUploadDeedToExel = (params: IGetClientDeedExcelParams): Promise<any> =>
  //   this.get(`${Endpoints.ClientDeedExcelUpload}`, {
  //     params,
  //     responseType: 'arraybuffer',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/xlsx',
  //     },
  //   });

  // getUploadDeedToExelWithProducts = (params: IGetClientDeedExcelParams): Promise<any> =>
  //   this.get(`${Endpoints.ClientDeedProductsExcelUpload}`, {
  //     params,
  //     responseType: 'arraybuffer',
  //     headers: {
  //       'Content-Type': 'application/json',
  //       'Accept': 'application/xlsx',
  //     },
  //   });
}

export const clientsInfoApi = new ClientsInfoApi(config);
