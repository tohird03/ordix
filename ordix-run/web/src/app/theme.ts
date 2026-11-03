import { theme as antdTheme, type ThemeConfig } from 'antd';

export type ThemeMode = 'light' | 'dark';

// Rasmdagi palitra: to'q sariq (accent), qora, och kulrang fon, oq kartalar
export const ACCENT = '#F2622B';
export const INK = '#111111';

export function getTheme(mode: ThemeMode): ThemeConfig {
  const dark = mode === 'dark';

  return {
    algorithm: dark ? antdTheme.darkAlgorithm : antdTheme.defaultAlgorithm,
    token: {
      colorPrimary: ACCENT,
      colorSuccess: '#2FA36B',
      colorWarning: '#F5A524',
      colorError: '#E5484D',
      colorBgLayout: dark ? '#0E0E10' : '#F3F3F4',
      colorBgContainer: dark ? '#18181B' : '#FFFFFF',
      colorBgElevated: dark ? '#202024' : '#FFFFFF',
      colorTextBase: dark ? '#F4F4F5' : INK,
      colorBorderSecondary: dark ? '#2A2A2F' : '#ECECEE',
      borderRadius: 8,
      fontFamily: "'Onest', system-ui, -apple-system, 'Segoe UI', sans-serif",
    },
    components: {
      Menu: {
        itemSelectedBg: dark ? '#F4F4F5' : INK,
        itemSelectedColor: dark ? '#111111' : '#FFFFFF',
        itemHoverBg: dark ? '#26262B' : '#F3F3F4',
        itemBorderRadius: 12,
      },
      Button: { primaryShadow: 'none' },
      Card: { borderRadiusLG: 20, colorBorderSecondary: 'transparent' },
      Table: {
        headerBg: dark ? '#222226' : '#F5F5F6',
        headerBorderRadius: 12,
        rowHoverBg: dark ? '#202024' : '#FAFAFB',
        borderColor: dark ? '#2A2A2F' : '#F0F0F1',
        cellPaddingBlockSM: 6,
        cellPaddingInlineSM: 10,
        cellFontSizeSM: 13,
      },
    },
  };
}
