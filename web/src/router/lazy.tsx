import { Loading } from '@/components/Loading';
import { lazy } from 'react';

const handleCatchChunkError = (err: unknown) => {
  if (!sessionStorage.getItem('chunk-reloaded')) {
    sessionStorage.setItem('chunk-reloaded', '1');
    window.location.reload();
  } else {
    console.error('Chunk load error:', err);
  }

  return { default: Loading };
};

// HOME


export const LoginPage = lazy(() =>
  import('@/modules/login').then(({ Login }) => ({ default: Login })).catch(handleCatchChunkError));

export const CurrencyPage = lazy(() =>
  import('@/modules/currencies').then(({ CurrenciesPage }) => ({ default: CurrenciesPage })).catch(handleCatchChunkError));

export const ProductsList = lazy(() =>
  import('@/modules/products').then(({ ProductsList }) => ({ default: ProductsList })).catch(handleCatchChunkError));

export const ClientsInfo = lazy(() =>
  import('@/modules/clients').then(({ ClientsInfo }) => ({ default: ClientsInfo })).catch(handleCatchChunkError));
