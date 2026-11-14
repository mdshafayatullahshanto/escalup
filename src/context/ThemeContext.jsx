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
      if (themeColorMeta) themeColorMeta.setAttribute('content', '#080C0F');
    } else {
      root.classList.remove('dark');
      root.style.colorScheme = 'light';
      if (themeColorMeta) themeColorMeta.setAttribute('content', '#0070AD');
    }
  }, [theme]);

  const toggleTheme = (e) => {
    const isReduced = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    const applyThemeChange = () => {
      setTheme((prev) => {
        const next = prev === 'dark' ? 'light' : 'dark';
        try { localStorage.setItem('escalup_theme', next); } catch { /* ignore */ }
        return next;
      });
    };

    if (!document.startViewTransition || isReduced) {
      applyThemeChange();
      return;
    }

    const x = e?.clientX ?? (window.innerWidth / 2);
    const y = e?.clientY ?? (window.innerHeight / 2);
    const endRadius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y)
    );

    const transition = document.startViewTransition(() => {
      applyThemeChange();
    });

    transition.ready.then(() => {
      const clipPath = [
        `circle(0px at ${x}px ${y}px)`,
        `circle(${endRadius}px at ${x}px ${y}px)`
      ];
      document.documentElement.animate(
        {
          clipPath: clipPath,
        },
        {
          duration: 480,
          easing: 'ease-in-out',
          pseudoElement: '::view-transition-new(root)',
        }
      );
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
