import { App as AntdApp, ConfigProvider } from 'antd';
import uzUZ from 'antd/locale/uz_UZ';
import { HashRouter } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { observer } from 'mobx-react-lite';
import React from 'react';
import { ThemeModeProvider, useThemeMode } from './theme-mode';
import { getTheme } from './theme';
import { Router } from '@/router';
import { authStore } from '@/stores/auth';
import { useStores } from '@/stores';
import { useBootstrap } from './useBootstrap';
import { Loading } from '@/components/Loading';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 1,
    },
  },
});

const ThemedApp = observer(() => {
  const { mode } = useThemeMode();

  const { authStore } = useStores();
  const [isInitiated] = useBootstrap();

  if (isInitiated) {
    return <Loading />;
  }


  return (
    <ConfigProvider theme={getTheme(mode)} locale={uzUZ}>
      <AntdApp>
        <HashRouter>
          <Router isAuth={authStore.isAuth} />
        </HashRouter>
      </AntdApp>
    </ConfigProvider>
  );
});

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeModeProvider>
        <ThemedApp />
      </ThemeModeProvider>
    </QueryClientProvider>
  );
}
