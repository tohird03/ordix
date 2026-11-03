import { lazy } from 'react';
import { Loading } from '@/components';

const handleCatchChunkError = () => {
  window.location.reload();

  return { default: Loading };
};

// HOME

export const Login = lazy(() =>
  import('@/pages/Login').then(({ Login }) => ({ default: Login })).catch(handleCatchChunkError));

// STAFFS
export const Staffs = lazy(() =>
  import('@/pages/Workers').then(({ Staffs }) => ({ default: Staffs })).catch(handleCatchChunkError));

export const Devices = lazy(() =>
  import('@/pages/Workers').then(({ DevicesPage }) => ({ default: DevicesPage })).catch(handleCatchChunkError));
