// Header.js
import React from 'react';
import { Layout, Menu, theme } from 'antd';
import ThemeSwitcher from './themeSwitcher';

// import Logo from './Logo'; // Assuming the SVG is placed in a separate component called Logo.js

const { Header } = Layout;

const navItems = []


const CustomHeader = () => {
  const {
      token: { colorBgHeader },
  } = theme.useToken();

  return (
    <Header style={{ display: 'flex', alignItems: 'center', background: colorBgHeader }}>
      <div style={{ display: 'flex', alignItems: 'center'}}>
        <div className="logo logo-light" style={{  height: '40px', margin: '0 125px 0 0' }} > {/* Adjust size as needed */}
        </div>
      </div>
      <Menu
        theme="dark"
        mode="horizontal"
        defaultSelectedKeys={['1']}
        items={navItems}
        style={{ flex: 1, minWidth: 0, background: colorBgHeader, marginLeft: '25px' }}
      />
      <ThemeSwitcher /> 

    </Header>
  );
};

export default CustomHeader;          