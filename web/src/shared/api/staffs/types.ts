import { ICurrency } from '../currency/types';
import {IPagination} from '../types';

export interface IStaffs {
  firstName: any;
  id: string;
  fullName: string;
  phone: string;
  pages: EPageAccess[];
  currency: ICurrency;
  isSuperAdmin: boolean;
}

export interface IGetStaffsParams extends IPagination {
  search?: string;
}

export interface IAddStaff {
  id?: string;
  fullName: string;
  phone: string;
  password: string;
  pages: EPageAccess[];
}

export interface IUpdateStaff {
  id?: string;
  fullName?: string;
  phone?: string;
  password?: string;
  pages?: EPageAccess[];
}

export enum EPageAccess {
  STAT = 'stat',
  PRODUCT = 'product',
  SELLING = 'selling',
  ARRIVAL = 'arrival',
  RETURNING = 'returning',
  CLIENT = 'client',
  CLIENTPAYMENT = 'clientpayment',
  CLIENTSTATISTIC = 'clientreport',
  SUPPLIER = 'supplier',
  SUPPLIERPAYMENT = 'supplierpayment',
  STUFF = 'stuff',
  STUFFPAYMENT = 'stuffpayment',
}

export interface IStaffPer {
  id: string;
  name: string;
}
