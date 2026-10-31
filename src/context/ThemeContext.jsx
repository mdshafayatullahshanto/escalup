// /src/context/ThemeContext.jsx
// Automatic System Theme Provider (Detects OS/browser preference and updates dynamically without refresh)

import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  isDark: true,
});

export function ThemeProvider({ children }) {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = (dark) => {
      setIsDark(dark);
      const root = document.documentElement;
      const themeColorMeta = document.querySelector('meta[name="theme-color"]');

      if (dark) {
        root.classList.add('dark');
        root.style.colorScheme = 'dark';
        if (themeColorMeta) themeColorMeta.setAttribute('content', '#0B111E');
      } else {
        root.classList.remove('dark');
        root.style.colorScheme = 'light';
        if (themeColorMeta) themeColorMeta.setAttribute('content', '#2E756E');
      }
    };

    // Synchronize initial state
    applyTheme(mediaQuery.matches);

    // Enable smooth transitions only after the initial page load has settled
    // This strictly prevents initial-render flickering or layout flashes
    const transitionTimer = setTimeout(() => {
      document.documentElement.classList.add('theme-transition');
    }, 150);

    // Real-time listener for OS / browser theme changes (No page refresh needed)
    const handleChange = (e) => {
      applyTheme(e.matches);
    };

    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener('change', handleChange);
    } else if (mediaQuery.addListener) {
      mediaQuery.addListener(handleChange);
    }

    return () => {
      clearTimeout(transitionTimer);
      if (mediaQuery.removeEventListener) {
        mediaQuery.removeEventListener('change', handleChange);
      } else if (mediaQuery.removeListener) {
        mediaQuery.removeListener(handleChange);
      }
    };
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: isDark ? 'dark' : 'light', isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
