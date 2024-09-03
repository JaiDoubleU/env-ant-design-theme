// index.js or main entry file
import React from 'react';
import ReactDOM from 'react-dom/client';
import { ConfigProvider } from 'antd';
import { ThemeProvider, useTheme } from './ThemeContext';
import App from './App';

const Root = () => {
  const { currentTheme } = useTheme(); // Use the theme from context

  return (
    <ConfigProvider theme={currentTheme}> {/* Make sure this re-renders with new theme */}
      <App />
    </ConfigProvider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider> {/* Wrap the entire app with ThemeProvider */}
    <Root />
  </ThemeProvider>
);
