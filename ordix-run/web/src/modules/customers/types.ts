export interface ICustomer {
  id: string;
  name: string;
  phone: string; // +998901234567
  address: string | null;
  lat: number | null;
  lng: number | null;
  debt: number; // so'mda
  lastSaleAt: string | null; // ISO sana
  createdAt: string;
  updatedAt: string;
}

export interface CustomerListResponse {
  items: ICustomer[];
  total: number;
  pageNumber: number;
  pageSize: number;
}

export interface CustomerInput {
  name: string;
  phone: string;
  address?: string | null;
  lat?: number | null;
  lng?: number | null;
  debt?: number; // faqat yaratishda (boshlang'ich qarz)
}

export interface CustomerQuery {
  pageNumber: number;
  pageSize: number;
  search?: string;
  hasDebt?: boolean;
}
