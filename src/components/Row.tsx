import { FC } from 'react';
import { Subject } from 'rxjs';

import { Cell } from './Cell';

interface Props {
  indexRow: number;
  line: null[];
  hover$: Subject<{ indexRow: number; indexCol: number }>;
}

export const Row: FC<Props> = ({ indexRow, hover$, line }) => {
  return (
    <tr>
      {line.map((_, indexCol) => (
        <Cell hover$={hover$} indexCol={indexCol} indexRow={indexRow} key={indexCol} />
      ))}
    </tr>
  );
};
