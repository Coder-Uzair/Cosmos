import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('cosmic-theme') || 'deep-space';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('cosmic-theme', theme);
  }, [theme]);

  const themes = [
    { id: 'deep-space', name: 'Deep Space', color: '#38bdf8' },
    { id: 'galaxy-purple', name: 'Galaxy Purple', color: '#a855f7' },
    { id: 'nasa-blue', name: 'NASA Blue', color: '#3b82f6' },
    { id: 'black-hole', name: 'Black Hole', color: '#d4d4d8' },
    { id: 'cosmic-neon', name: 'Cosmic Neon', color: '#2dd4bf' },
    { id: 'solar-gold', name: 'Solar Gold', color: '#fbbf24' }
  ];

  return (
    <ThemeContext.Provider value={{ theme, setTheme, themes }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}