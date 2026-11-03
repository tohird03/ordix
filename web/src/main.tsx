import React from 'react';
import ReactDOM from 'react-dom/client';
import '@fontsource/onest/400.css';
import '@fontsource/onest/500.css';
import '@fontsource/onest/600.css';
import { stores, resetStores } from '@/stores';
import App from './app/App';
import { setAuthBridge } from './shared/api/authBridge';

setAuthBridge({
  getToken: () => stores.authStore.token?.accessToken,
  onUnauthorized: () => {
    resetStores();
    window.localStorage.clear();
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
