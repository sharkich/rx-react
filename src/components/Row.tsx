import { FC } from 'react';

import { Cell } from './Cell';

interface Props {
  indexRow: number;
  line: number[];
}

export const Row: FC<Props> = ({ indexRow, line }) => {
  return (
    <div className="row">
      {line.map((_, indexCol) => (
        <Cell indexCol={indexCol} indexRow={indexRow} key={indexCol} />
      ))}
    </div>
  );
};
