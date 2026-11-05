// /src/context/ThemeContext.jsx
// Full light/dark/auto theme system with localStorage persistence and system preference detection

import React, { createContext, useContext, useEffect, useState } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  isDark: false,
  toggleTheme: () => {},
});

function getInitialTheme() {
  try {
    const stored = localStorage.getItem('escalup_theme');
    if (stored === 'dark' || stored === 'light') return stored;
  } catch { /* ignore */ }
  if (typeof window !== 'undefined' && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
}

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    const root = document.documentElement;
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (theme === 'dark') {
      root.classList.add('dark');
      root.style.colorScheme = 'dark';
      if (themeColorMeta) themeColorMeta.setAttribute('content', '#0D1A17');
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      if (themeColorMeta) themeColorMeta.setAttribute('content', '#2E756E');
    }
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      try { localStorage.setItem('escalup_theme', next); } catch { /* ignore */ }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, isDark: theme === 'dark', toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
