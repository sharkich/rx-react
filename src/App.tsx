import './App.css';

import React, { useEffect } from 'react';

import { selected$ } from './models/selected$';
import { size$ } from './models/size$';
import { Header } from './views/Header';
import { SizeForm } from './views/SizeForm';
import { Table } from './views/Table';

export const App = () => {
  console.log('app.render');

  useEffect(() => {
    const subscription = size$.subscribe(() => selected$.next(null));
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <SizeForm />
      <Table />
    </div>
  );
};
