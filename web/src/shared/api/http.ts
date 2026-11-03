import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import type { INetworkConfig, IResponse, TMethod } from './types';
import { Endpoints } from './endpoint';
import { getAuthBridge } from './authBridge';

export class Instance {
  protected readonly instance: AxiosInstance;
  protected baseURL = '';
  protected stageUrl = '';
  protected failedRequestsQueue: {
    method: TMethod;
    url: string;
    params?: any;
    config?: AxiosRequestConfig;
    base: string;
    stage: string;
  } | null = null;

  public constructor({ baseURL = Endpoints.Base, stageUrl = '', headers, timeout = 65000 }: INetworkConfig) {
    this.instance = axios.create({
      baseURL,
      timeout,
      headers,
    });
    // @ts-ignore
    this.instance.interceptors.request.use(this.handleRequest);
    this.instance.interceptors.response.use(this.handleResponse, this.handleResponseError);
    this.baseURL = baseURL;
    this.stageUrl = stageUrl;
  }

  handleResponse = <T>(response: AxiosResponse<IResponse<T>>) => response;

  private handleResponseError = (error: AxiosError) => {
    if (error?.response?.status === 401) {
      getAuthBridge().onUnauthorized();
    }

    throw error;
  };

  private handleRequest = async ({ headers, ...restConfig }: AxiosRequestConfig) => {
    const accessToken = getAuthBridge().getToken();

    return {
      headers: {
        ...headers,
        ...(accessToken && { Authorization: `Bearer ${accessToken}` }),
      },
      ...restConfig,
    };
  };

  public async get(url: string, params?: any) {
    const { data } = await this.instance.get(`${this.stageUrl}${this.baseURL}${url}`, { ...params });

    return data;
  }

  public async post(url: string, params?: any, config?: AxiosRequestConfig) {
    return this.instance.post(url, params, { ...config, baseURL: `${this.stageUrl}${this.baseURL}` });
  }

  public async resPost(url: string, params?: any, config?: AxiosRequestConfig) {
    const { data } = await this.instance.post(url, params, { ...config, baseURL: `${this.stageUrl}${this.baseURL}` });

    return data;
  }

  public async delete(url: string, config?: AxiosRequestConfig) {
    return this.instance.delete(url, { ...config, baseURL: `${this.stageUrl}${this.baseURL}` });
  }

  public async put(url: string, params?: any, config?: AxiosRequestConfig) {
    return this.instance.put(url, params, { ...config, baseURL: `${this.stageUrl}${this.baseURL}` });
  }

  public async patch(url: string, params?: any, config?: AxiosRequestConfig) {
    return this.instance.patch(url, params, { ...config, baseURL: `${this.stageUrl}${this.baseURL}` });
  }
}
