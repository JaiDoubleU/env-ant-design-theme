// ThemeContext.js
import React, { createContext, useContext, useState } from 'react';
import { lightTheme, darkTheme } from './theme';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode((prev) => !prev); // This should update the state correctly
  };

  const currentTheme = isDarkMode ? darkTheme : lightTheme;
console.error('Current Theme:', currentTheme); // Add this log to debug

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme, currentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
