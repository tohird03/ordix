import React, { Suspense } from 'react';
import { Navigate, useRoutes } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import DashboardPage from '../modules/dashboard/pages/DashboardPage';
import { ROUTES } from './links';
import { ProtectedRoutes } from './ProtectedRoutes';
import { Loading } from '@/components/Loading';
import { PublicRoutes } from './PublicRoutes';
import { ClientsInfo, CurrencyPage, LoginPage, ProductsList } from './lazy';

type Props = {
  isAuth: boolean | null;
};

export const Router = ({ isAuth }: Props) => useRoutes([
  {
    path: ROUTES.home,
    element: <ProtectedRoutes isAuth={isAuth} />,
    children: [
      {
        path: ROUTES.home,
        element: <MainLayout />,
        children: [
          {
            element: <Suspense fallback={<Loading />}><DashboardPage /></Suspense>,
            path: ROUTES.home,
            index: true,
          },
          {
            element: <Suspense fallback={<Loading />}><CurrencyPage /></Suspense>,
            path: ROUTES.currency,
          },
          {
            element: <Suspense fallback={<Loading />}><ProductsList /></Suspense>,
            path: ROUTES.productList,
          },
          {
            element: <Suspense fallback={<Loading />}><ClientsInfo /></Suspense>,
            path: ROUTES.clientsInfo,
          },

          // SETTINGS
          {
            element: <Navigate to={ROUTES.home} />,
            path: '*',
          },
          {
            element: <Navigate to={ROUTES.home} />,
            path: '/',
          },
        ]
      }
    ]
  },
  {
    path: ROUTES.signIn,
    element: <PublicRoutes isAuth={isAuth} />,
    children: [
      {
        index: true,
        element: <Suspense fallback={<Loading />}><LoginPage /></Suspense>,
      },
    ],
  },
]);
