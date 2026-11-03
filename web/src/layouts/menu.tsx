import type { ReactNode } from 'react';
import type { MenuProps } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  IdcardOutlined,
  InboxOutlined,
  SettingOutlined,
  ShopOutlined,
  SwapOutlined,
  TeamOutlined,
} from '@ant-design/icons';

export interface NavChild {
  key: string;
  label: string;
}
export interface NavItem {
  key: string;
  icon: ReactNode;
  label: string;
  children?: NavChild[];
}

// Oddiy element va submenu bolasining key'i = sahifa yo'li
export const nav: NavItem[] = [
  { key: '/dashboard', icon: <AppstoreOutlined />, label: 'Bosh sahifa' },
  {
    key: 'customers', icon: <TeamOutlined />, label: 'Mijozlar',
    children: [
      { key: '/customers/list', label: "Mijozlar ro'yxati" },
      { key: '/customers/payments', label: "To'lovlar" },
    ],
  },
  {
    key: 'suppliers', icon: <ShopOutlined />, label: 'Yetkazib beruvchilar',
    children: [
      { key: '/suppliers/list', label: "Yetkazib beruvchilar ro'yxati" },
      { key: '/suppliers/payments', label: "To'lovlar" },
    ],
  },
  {
    key: 'products', icon: <InboxOutlined />, label: 'Mahsulotlar',
    children: [
      { key: '/products/list', label: "Mahsulotlar ro'yxati" },
      { key: '/products/categories', label: 'Kategoriyalar' },
    ],
  },
  {
    key: 'trade', icon: <SwapOutlined />, label: 'Savdo',
    children: [
      { key: '/sales', label: 'Sotuvlar' },
      { key: '/purchases', label: 'Kirimlar' },
      { key: '/returns', label: 'Qaytarishlar' },
    ],
  },
  { key: '/reports', icon: <BarChartOutlined />, label: 'Hisobotlar' },
  { key: '/staff', icon: <IdcardOutlined />, label: 'Xodimlar' },
  {
    key: 'settings', icon: <SettingOutlined />, label: 'Sozlamalar',
    children: [{ key: '/settings/currencies', label: 'Valyutalar' }],
  },
];

export const menuItems: MenuProps['items'] = nav.map(({ key, icon, label, children }) =>
  children
    ? { key, icon, label, children: children.map((c) => ({ key: c.key, label: c.label })) }
    : { key, icon, label },
);

export const isActive = (item: NavItem, pathname: string) =>
  item.children ? item.children.some((c) => c.key === pathname) : item.key === pathname;

export const findOpenKeys = (pathname: string) =>
  nav.filter((i) => i.children && isActive(i, pathname)).map((i) => i.key);
