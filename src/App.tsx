import React from 'react';
import './App.css';
import { COLORS } from './colors';
import AppBody from './components/app-body/AppBody';
import AppHeader from './components/app-header/AppHeader';

function App(): JSX.Element {
   return (
      <div
         style={{
            background: COLORS.MAIN_BACKGROUND,
            height: '100vh',
            width: '100vw',
            display: 'flex',
            flexDirection: 'column',
         }}
      >
         <AppHeader />
         <AppBody />
      </div>
   );
}

export default App;
