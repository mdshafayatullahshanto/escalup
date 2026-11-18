// /src/context/ThemeContext.jsx
// Full light/dark/auto theme system with real-time OS preference detection
/* eslint-disable react-refresh/only-export-components */

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  themeMode: 'auto',
  isDark: false,
  setThemeMode: () => {},
  toggleTheme: () => {},
  cycleTheme: () => {},
});

function getSystemPrefersDark() {
  if (typeof window === 'undefined' || !window.matchMedia) return false;
  return window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function getInitialMode() {
  try {
    const storedMode = localStorage.getItem('escalup_theme_mode');
    if (storedMode === 'auto' || storedMode === 'dark' || storedMode === 'light') {
      return storedMode;
    }
    // Clean up legacy key so it does not block auto mode
    localStorage.removeItem('escalup_theme');
  } catch { /* ignore */ }
  return 'auto';
}

export function ThemeProvider({ children }) {
  const [themeMode, setThemeModeState] = useState(getInitialMode);
  const [systemPrefersDark, setSystemPrefersDark] = useState(getSystemPrefersDark);

  // Compute active theme from themeMode and system preference
  const isDark = themeMode === 'dark' || (themeMode === 'auto' && systemPrefersDark);
  const theme = isDark ? 'dark' : 'light';

  // Listen in real-time to OS system theme changes
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    
    const handler = (e) => {
      setSystemPrefersDark(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handler);
      return () => mediaQuery.removeEventListener('change', handler);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handler);
      return () => mediaQuery.removeListener(handler);
    }
  }, []);

  // Sync document root class, CSS colorScheme, and mobile theme-color meta tag
  useEffect(() => {
    const root = document.documentElement;
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');

    if (isDark) {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      if (themeColorMeta) themeColorMeta.setAttribute('content', '#080C0F');
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      if (themeColorMeta) themeColorMeta.setAttribute('content', '#0070AD');
    }
  }, [isDark]);

  // Set explicit mode ('auto', 'light', or 'dark') and persist
  const setThemeMode = (mode) => {
    setThemeModeState(mode);
    try {
      localStorage.setItem('escalup_theme_mode', mode);
      if (mode === 'auto') {
        localStorage.removeItem('escalup_theme');
      } else {
        localStorage.setItem('escalup_theme', mode);
      }
    } catch { /* ignore */ }
  };

  // Toggle between dark and light
  const toggleTheme = () => {
    const next = isDark ? 'light' : 'dark';
    setThemeMode(next);
  };

  // Cycle between auto -> dark -> light -> auto
  const cycleTheme = () => {
    let next = 'auto';
    if (themeMode === 'auto') {
      next = isDark ? 'light' : 'dark';
    } else if (themeMode === 'dark') {
      next = 'light';
    } else {
      next = 'auto';
    }
    setThemeMode(next);
  };

  return (
    <ThemeContext.Provider value={{
      theme,
      themeMode,
      isDark,
      setThemeMode,
      toggleTheme,
      cycleTheme,
    }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
