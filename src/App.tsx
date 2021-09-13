import './App.css';

import React from 'react';

import { size$ } from './models/size$';
import { useSubscribe } from './utils/useSubscribe';
import { SizeForm } from './views/SizeForm';

export const App = () => {
  const size = useSubscribe(size$);
  return (
    <div className="App">
      <header className="App-header">Hello World ({size})</header>
      <SizeForm />
      {/*{JSON.stringify(hovered)}*/}
      {/*<Table hover$={hover$} size={30} />*/}
    </div>
  );
};
