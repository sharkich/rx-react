import { FC, useCallback, useMemo } from 'react';
import { combineLatest, distinctUntilChanged, map, Observable } from 'rxjs';

import { Cell } from './Cell';

interface Props {
  indexRow: number;
  highlightedCellIndex$: Observable<number>;
  line: null[];
  onHover: (indexCol: number) => void;
  hoveredIndexCol$: Observable<number | null>;
}

export const Row: FC<Props> = ({ indexRow, highlightedCellIndex$, line, onHover, hoveredIndexCol$ }) => {
  const highlighted$ = useCallback(
    (indexCol: number) =>
      combineLatest([highlightedCellIndex$, hoveredIndexCol$]).pipe(
        map(([highlightedCellIndex, hoveredIndexCol]) => highlightedCellIndex === indexCol || hoveredIndexCol !== null),
        distinctUntilChanged()
      ),
    [highlightedCellIndex$, hoveredIndexCol$]
  );

  const hovered$ = useCallback(
    (indexCol: number) =>
      hoveredIndexCol$.pipe(
        map((hoveredIndexCol) => hoveredIndexCol === indexCol),
        distinctUntilChanged()
      ),
    [hoveredIndexCol$]
  );

  return (
    <tr>
      {line.map((_, indexCol) => (
        <Cell
          highlighted$={highlighted$(indexCol)}
          hovered$={hovered$(indexCol)}
          indexCol={indexCol}
          indexRow={indexRow}
          key={indexCol}
          onHover={() => onHover(indexCol)}
        />
      ))}
    </tr>
  );
};
