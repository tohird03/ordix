import { makeAutoObservable, observable } from 'mobx';
import { MenuProps } from 'antd';
import { IStaff } from '../profile/types';
import { TokenType } from './types';
import { authApi } from '@/shared/api/auth';
import { addNotification } from '@/shared/utils/addNotification';
import { ILoginForm } from '@/shared/api/auth/types';

class AuthStore {
  isAuth: boolean | null = false;
  token: TokenType | null = null;
  staffInfo: IStaff | null = null;
  mainMenuItems: MenuProps['items'] | null = null;
  isCloseDay = false;

  constructor() {
    makeAutoObservable(this, {
      isAuth: observable,
    });
  }

  getSignIn = (params: ILoginForm) =>
    authApi.getSignIn(params)
      .then(res => res)
      .catch(addNotification);

  getProfile = () =>
    authApi.getUserProfile()
      .then(res => {
        if (res) {
          // this.mainMenuItems = generateAllMenuItems(mainMenuList, res?.data);
          this.setStaffInfo(res?.data);
        }
      })
      .catch(addNotification);

  setSession = (accessToken: string) => {
    this.setToken({ accessToken });
    this.setIsAuth(true);
  };

  setMainMenuItems = (menuItems: MenuProps['items'] | null) => {
    this.mainMenuItems = menuItems;
  };

  setStaffInfo = (staffInfo: IStaff) => {
    this.staffInfo = staffInfo;
  };

  setToken = (token: TokenType) => {
    this.token = token;
  };

  setIsAuth = (isAuth: boolean) => {
    this.isAuth = isAuth;
  };

  setIsCloseDay = (isCloseDay: boolean) => {
    this.isCloseDay = isCloseDay;
  };

  reset = () => {
    this.isAuth = null;
    this.token = null;
    this.staffInfo = null;
    window.localStorage.clear();
  };
}

export const authStore = new AuthStore();
