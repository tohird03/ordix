import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from 'react';
import type { ThemeMode } from './theme';

const KEY = 'ordix-theme';

const read = (): ThemeMode => {
  try {
    return localStorage.getItem(KEY) === 'dark' ? 'dark' : 'light';
  } catch {
    return 'light';
  }
};

interface ThemeModeValue {
  mode: ThemeMode;
  setMode: (mode: ThemeMode) => void;
}

const ThemeModeContext = createContext<ThemeModeValue>({ mode: 'light', setMode: () => {} });

export const useThemeMode = () => useContext(ThemeModeContext);

export function ThemeModeProvider({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<ThemeMode>(read);

  useEffect(() => {
    document.documentElement.dataset.theme = mode;
    try {
      localStorage.setItem(KEY, mode);
    } catch {
      /* saqlab bo'lmasa ham ishlayveradi */
    }
  }, [mode]);

  const value = useMemo(() => ({ mode, setMode }), [mode]);
  return <ThemeModeContext.Provider value={value}>{children}</ThemeModeContext.Provider>;
}
