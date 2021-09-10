import './App.css';

import React, { useEffect, useMemo, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

import { Table } from './components/Table';

export const App = () => {
  const hover$ = useMemo(() => new BehaviorSubject({ indexRow: 0, indexCol: 0 }), []);

  const [hovered, setHovered] = useState({ indexRow: 0, indexCol: 0 });
  useEffect(() => {
    const subsHovered$ = hover$.subscribe(setHovered);
    return () => {
      subsHovered$.unsubscribe();
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">Hello World: {JSON.stringify(hovered)}</header>
      <Table hover$={hover$} size={30} />
    </div>
  );
};
