import { FC } from 'react';

import { Cell } from './Cell';

interface Props {
  indexRow: number;
  line: null[];
  onHover: (indexCol: number) => void;
  hover: number | null;
}

export const Row: FC<Props> = ({ indexRow, line, onHover, hover }) => {
  return (
    <tr>
      {line.map((_, indexCol) => (
        <Cell
          hover={hover === indexCol}
          indexCol={indexCol}
          indexRow={indexRow}
          key={indexCol}
          onHover={() => onHover(indexCol)}
        />
      ))}
    </tr>
  );
};
