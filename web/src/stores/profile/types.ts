import { EPageAccess } from '@/api/staffs';

export interface IStaff {
  fullName: string;
  phone: string;
  permissions: IPemissions[];
  isSuperAdmin: boolean;
  pages: EPageAccess[];
}

export interface IPemissions {
  id: string;
  key: EPageAccess;
  name: string;
  description: string;
  actions: IPemissions[];
}

export type ChangePasswordFormType = {
  currentPassword: string;
  newPassword: string;
};
