import { IStaffs } from "../staffs";

export interface ILoginForm {
  phone: string;
  password: string;
  deviceToken?: string;
}
export interface ILoginResponse {
  data: {
    data: {
      deviceToken?: any;
      tokens?: ITokens;
      staff?: IStaffs;
      status: 'APPROVED' | 'PENDING';
    }
  }
}

export interface ITokens {
  accessToken: string;
  refreshToken: string;
}
