import { FC } from 'react';

import { ICell } from '../interfaces/ICell';
import { Cell } from './Cell';

interface Props {
  indexRow: number;
  line: number[];
  onSelect: (cell: ICell) => void;
}

export const Row: FC<Props> = ({ indexRow, line, onSelect }) => {
  return (
    <div className="row">
      {line.map((_, indexCol) => (
        <Cell id={`${indexRow}.${indexCol}`} key={indexCol} onSelect={() => onSelect({ indexRow, indexCol })} />
      ))}
    </div>
  );
};
