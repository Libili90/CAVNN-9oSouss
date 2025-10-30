import React, { createContext, useContext, useState, useEffect, useMemo } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

type Theme = 'light' | 'dark' | 'system';

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  resolvedTheme: 'light' | 'dark';
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useLocalStorage<Theme>('theme', 'system');
  const [resolvedTheme, setResolvedTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const root = window.document.documentElement;
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)');

    const updateTheme = () => {
      const isDark = theme === 'dark' || (theme === 'system' && systemPrefersDark.matches);
      setResolvedTheme(isDark ? 'dark' : 'light');
      root.classList.toggle('dark', isDark);
    };

    updateTheme();

    const mediaQueryListener = (e: MediaQueryListEvent) => {
      if (theme === 'system') {
        updateTheme();
      }
    };

    systemPrefersDark.addEventListener('change', mediaQueryListener);
    return () => {
      systemPrefersDark.removeEventListener('change', mediaQueryListener);
    };
  }, [theme]);

  const value = useMemo(() => ({ theme, setTheme, resolvedTheme }), [theme, setTheme, resolvedTheme]);

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
