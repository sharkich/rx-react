import { FC } from 'react';

import { Cell } from './Cell';

interface Props {
  indexRow: number;
  line: null[];
}

export const Row: FC<Props> = ({ indexRow, line }) => {
  return (
    <tr>
      {line.map((_, indexCol) => (
        <Cell indexCol={indexCol} indexRow={indexRow} key={indexCol} />
      ))}
    </tr>
  );
};
