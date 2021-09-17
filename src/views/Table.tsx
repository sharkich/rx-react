import { FC, useEffect, useState } from 'react';
import { map } from 'rxjs';

import { Row } from '../components/Row';
import { ICell } from '../interfaces/ICell';
import { selected$ } from '../models/selected$';
import { table$ } from '../models/table$';
import { useSubscribe } from '../utils/useSubscribe';

export const Table: FC = () => {
  const table = useSubscribe(table$);

  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    const subscription$ = selected$.pipe(map((selected) => !!selected)).subscribe(setIsSelected);
    return () => {
      subscription$.unsubscribe();
    };
  }, []);

  if (!table) {
    return null;
  }

  const onSelect = (cell: ICell) => {
    selected$.next(cell);
  };

  return (
    <div className={'table ' + (isSelected ? 'selected' : '')}>
      {table.map((row, indexRow) => (
        <Row
          indexRow={indexRow}
          key={`tr_${indexRow}`}
          line={row}
          selectedCol$={selected$.pipe(
            map((selected) => (selected && indexRow === selected.indexRow ? selected.indexCol : null))
          )}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
