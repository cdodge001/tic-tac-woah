import React from 'react';

import ThemeProvider from './providers/ThemeProvider';
import './css/App.css';
import SettingsProvider from './providers/SettingsProvider';
import View from './components/View';

const App = () => {
  return (
    <ThemeProvider>
      <div 
        className="App"
      >
        <SettingsProvider>
          <View />
        </SettingsProvider>
      </div>
    </ThemeProvider>
  );
};

export default App;
