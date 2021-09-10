import './App.css';

import React, { useState } from 'react';

import { Table } from './components/Table';

export const App = () => {
  const [hover, setHover] = useState({ indexRow: 0, indexCol: 0 });

  const onHover = (indexRow: number, indexCol: number) => {
    setHover({ indexRow, indexCol });
  };

  return (
    <div className="App">
      <header className="App-header">Hello World: {JSON.stringify(hover)}</header>
      <Table hover={hover} size={30} onHover={onHover} />
    </div>
  );
};
