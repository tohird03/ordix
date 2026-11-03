import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import ComingSoonPage from '../modules/common/pages/ComingSoonPage';
import CustomersPage from '../modules/customers/pages/CustomersPage';
import CurrenciesPage from '../modules/currencies/pages/CurrenciesPage';
import DashboardPage from '../modules/dashboard/pages/DashboardPage';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { index: true, element: <Navigate to="/dashboard" replace /> },
      { path: 'dashboard', element: <DashboardPage /> },
      { path: 'customers/list', element: <CustomersPage /> },
      { path: 'settings/currencies', element: <CurrenciesPage /> },
      { path: '*', element: <ComingSoonPage /> },
    ],
  },
]);
