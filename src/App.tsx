import React from 'react';
import logo from './logo.svg';
import './App.css';
import AppHeader from './components/app-header/AppHeader';
import { COLORS } from './colors';
import { Button } from 'antd';
import AppBody from './components/app-body/AppBody';

function App() {
  return (
    <div style={{
      background: COLORS.MAIN_BACKGROUND,
      height: '100vh',
      width: '100vw',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <AppHeader />
      <AppBody />
    </div>
  );
}



export default App;
