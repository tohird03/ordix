import { Loading } from '@/components/Loading';
import { lazy } from 'react';

const handleCatchChunkError = () => {
  window.location.reload();

  return { default: Loading };
};

// HOME


export const LoginPage = lazy(() =>
  import('@/modules/login').then(({ Login }) => ({ default: Login })).catch(handleCatchChunkError));

export const CurrencyPage = lazy(() =>
  import('@/modules/currencies').then(({ CurrenciesPage }) => ({ default: CurrenciesPage })).catch(handleCatchChunkError));

export const ProductsList = lazy(() =>
  import('@/modules/products').then(({ ProductsList }) => ({ default: ProductsList })).catch(handleCatchChunkError));
