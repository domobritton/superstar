import React from 'react';

import Stars from './Stars';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
    </header>
    <Stars />
  </div>
);

export default App;
