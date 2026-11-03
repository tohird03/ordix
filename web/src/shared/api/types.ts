export interface IResponse<TBody, TTotalCalc = any> {
  data: {
    totalCount: number;
    pageNumber: number;
    pageSize: number;
    data: TBody;
    calc?: TTotalCalc;
  };
}

export interface IOneElement {
  id: string;
  name: string;
}

export interface ISuccessResponse {
  success: boolean;
}

export interface IPagination {
  pageNumber?: number;
  pageSize?: number;
  description?: string;
}

export type TStage = {
  apiUrl: string;
  cdnHost?: string;
};

export interface INetworkConfig {
  baseURL?: string;
  headers?: any;
  timeout?: number;
  stageUrl?: string;
}
export type TNetworkError = {
  status?: number;
  message: string;
  title: string;
};

export type TMethod = 'get' | 'post' | 'put' | 'delete' | 'patch';
