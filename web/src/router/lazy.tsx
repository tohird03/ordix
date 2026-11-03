import { Loading } from '@/components/Loading';
import { lazy } from 'react';

const handleCatchChunkError = () => {
  window.location.reload();

  return { default: Loading };
};

// HOME


export const Login = lazy(() =>
  import('@/modules/login').then(({ Login }) => ({ default: Login })).catch(handleCatchChunkError));
