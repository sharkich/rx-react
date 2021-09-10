import { FC } from 'react';

import { Cell } from './Cell';

interface Props {
  indexRow: number;
  highlightedCellIndex: number;
  line: null[];
  onHover: (indexCol: number) => void;
  hoveredIndexCol: number | null;
}

export const Row: FC<Props> = ({ indexRow, highlightedCellIndex, line, onHover, hoveredIndexCol }) => {
  return (
    <tr>
      {line.map((_, indexCol) => (
        <Cell
          highlighted={highlightedCellIndex === indexCol || hoveredIndexCol !== null}
          hovered={hoveredIndexCol === indexCol}
          indexCol={indexCol}
          indexRow={indexRow}
          key={indexCol}
          onHover={() => onHover(indexCol)}
        />
      ))}
    </tr>
  );
};
