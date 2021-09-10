import './App.css';

import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { BehaviorSubject } from 'rxjs';

import { Table } from './components/Table';

export const App = () => {
  const hover$ = useMemo(() => new BehaviorSubject({ indexRow: 0, indexCol: 0 }), []);

  const [hovered, setHovered] = useState({ indexRow: 0, indexCol: 0 });
  useEffect(() => {
    const subsHovered$ = hover$.subscribe(setHovered);
    console.log('hover$.subscribe');
    return () => {
      subsHovered$.unsubscribe();
      console.log('hover$.unsubscribe');
    };
  }, [hover$]);

  const onHover = useCallback(
    (indexRow: number, indexCol: number) => {
      hover$.next({ indexRow, indexCol });
    },
    [hover$]
  );
  return (
    <div className="App">
      <header className="App-header">Hello World: {JSON.stringify(hovered)}</header>
      <Table hover$={hover$} size={30} onHover={onHover} />
    </div>
  );
};
