import './App.css';

import React from 'react';

import { Table } from './components/Table';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">Hello World</header>
      <Table size={30} />
    </div>
  );
};
