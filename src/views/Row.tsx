import { FC, useEffect, useState } from 'react';
import { map, Observable } from 'rxjs';

import { ICell } from '../interfaces/ICell';
import { Optional } from '../interfaces/Optional';
import { Cell } from './Cell';

interface Props {
  indexRow: number;
  line: number[];
  selectedCol$: Observable<Optional<number>>;
  onSelect: ({ indexRow, indexCol }: ICell) => void;
}

export const Row: FC<Props> = ({ indexRow, line, selectedCol$, onSelect }) => {
  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    const subscription$ = selectedCol$.pipe(map((selectedCol) => selectedCol !== null)).subscribe(setIsSelected);
    return () => {
      subscription$.unsubscribe();
    };
  }, [selectedCol$]);

  console.log(`row.${indexRow}.render`);
  return (
    <div className={'row ' + (isSelected ? 'selected' : '')}>
      {line.map((_, indexCol) => (
        <Cell
          indexCol={indexCol}
          indexRow={indexRow}
          key={indexCol}
          selected$={selectedCol$.pipe(map((col) => col === indexCol))}
          onSelect={() => onSelect({ indexRow, indexCol })}
        />
      ))}
    </div>
  );
};
