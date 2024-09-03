// ThemeSwitcher.js
import React from 'react';
import { Switch } from 'antd';
import { useTheme } from './ThemeContext'; // Use the theme context
import { CheckOutlined, CloseOutlined } from '@ant-design/icons';


const ThemeSwitcher = () => {
  const { isDarkMode, toggleTheme } = useTheme(); // Destructuring the context values properly
  console.error('is dark mode? ' + isDarkMode);

  return (
    <div style={{ padding: 10 }}>
          <span style={{ color: 'white', padding:'4px' }}>Dark</span>
          {/* <Switch checked={isDarkMode} onChange={toggleTheme} /> */}
          <Switch checked={!isDarkMode} onChange={toggleTheme} 
                
            />
      <span style={{ color: 'white', padding:'4px' }}>Light</span>
    </div>
  );
};

export default ThemeSwitcher;


// const ThemeSwitcher = () => {
//   const { isDarkMode, toggleTheme } = useTheme(); // Destructuring the context values properly

//   return (
//     <div style={{ padding: 10 }}>
//       <span>Light</span>
//       <Switch checked={isDarkMode} onChange={toggleTheme} />
//       <span>Dark</span>
//     </div>
//   );
// };

// export default ThemeSwitcher;

