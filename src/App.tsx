import './App.css';

import React, { useState } from 'react';

import { getTable } from './models/table';
import { Header } from './views/Header';
import { SizeForm } from './views/SizeForm';
import { Table } from './views/Table';

export const App = () => {
  const [size] = useState(10);
  const [table] = useState(getTable(size));
  return (
    <div className="App">
      <Header />
      <SizeForm />
      <Table table={table} />
    </div>
  );
};
