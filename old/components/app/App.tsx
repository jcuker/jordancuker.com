import React from 'react';
import AppBody from '../app-body/AppBody';
import ResponsiveAppHeader from '../app-header/ResponsiveAppHeader';
import Copyright from '../copyright/Copyright';
import './App.scss';

function App(): JSX.Element {
   return (
      <div className="app">
         <ResponsiveAppHeader />
         <AppBody />
         <Copyright />
      </div>
   );
}

export default App;
