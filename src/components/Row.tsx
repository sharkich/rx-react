import { FC } from 'react';
import { map, Observable } from 'rxjs';

import { ICell } from '../interfaces/ICell';
import { Optional } from '../interfaces/Optional';
import { useSubscribe } from '../utils/useSubscribe';
import { Cell } from './Cell';

interface Props {
  indexRow: number;
  line: number[];
  onSelect: (cell: ICell) => void;
  selected$: Observable<Optional<number>>;
}

export const Row: FC<Props> = ({ indexRow, line, onSelect, selected$ }) => {
  const selected = useSubscribe(selected$);

  return (
    <div className={'row ' + (selected !== null ? 'selected' : '')}>
      {line.map((_, indexCol) => (
        <Cell
          id={`${indexRow}.${indexCol}`}
          key={indexCol}
          selected$={selected$.pipe(map((value) => value === indexCol))}
          onSelect={() => onSelect({ indexRow, indexCol })}
        />
      ))}
    </div>
  );
};
