import { App as AntdApp, ConfigProvider } from 'antd';
import uzUZ from 'antd/locale/uz_UZ';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { getTheme } from './theme';
import { ThemeModeProvider, useThemeMode } from './theme-mode';

function ThemedApp() {
  const { mode } = useThemeMode();

  return (
    <ConfigProvider theme={getTheme(mode)} locale={uzUZ}>
      <AntdApp>
        <RouterProvider router={router} />
      </AntdApp>
    </ConfigProvider>
  );
}

export default function App() {
  return (
    <ThemeModeProvider>
      <ThemedApp />
    </ThemeModeProvider>
  );
}
