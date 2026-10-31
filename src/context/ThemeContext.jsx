// /src/context/ThemeContext.jsx
// Modern Theme Provider locked to premium dark monochrome aesthetic

import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'dark',
  isDark: true,
});

export function ThemeProvider({ children }) {
  const isDark = true;

  useEffect(() => {
    const root = document.documentElement;
    root.classList.add('dark');
    root.style.colorScheme = 'dark';
    const themeColorMeta = document.querySelector('meta[name="theme-color"]');
    if (themeColorMeta) themeColorMeta.setAttribute('content', '#0A0A0A');

    const transitionTimer = setTimeout(() => {
      document.documentElement.classList.add('theme-transition');
    }, 150);

    return () => clearTimeout(transitionTimer);
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'dark', isDark }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
