import './App.css';

import React from 'react';

import { Header } from './views/Header';
import { SizeForm } from './views/SizeForm/SizeForm';
import { Table } from './views/Table';

export const App = () => {
  return (
    <div className="App">
      <Header />
      <SizeForm />
      <Table />
    </div>
  );
};
