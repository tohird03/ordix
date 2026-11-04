import { EPageAccess } from "@/shared/api/staffs";

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
