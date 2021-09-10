import { FC, useCallback, useMemo } from 'react';
import { distinctUntilChanged, map, Observable } from 'rxjs';

import { Row } from './Row';

interface Props {
  size: number;
  onHover: (indexRow: number, indexCol: number) => void;
  hover$: Observable<{ indexRow: number; indexCol: number }>;
}

export const Table: FC<Props> = ({ size, hover$, onHover }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const line = useMemo(() => new Array(size).fill(null), [size]);

  const highlightedCellIndex$ = useMemo(
    () =>
      hover$.pipe(
        map(({ indexCol }) => indexCol),
        distinctUntilChanged()
      ),
    [hover$]
  );

  const hoveredIndexCol$ = useCallback(
    (indexRow: number) =>
      hover$.pipe(
        map((hover) => (hover.indexRow === indexRow ? hover.indexCol : null)),
        distinctUntilChanged()
      ),
    [hover$]
  );
  return (
    <table className="table">
      <tbody>
        {line.map((_, indexRow) => (
          <Row
            highlightedCellIndex$={highlightedCellIndex$}
            hoveredIndexCol$={hoveredIndexCol$(indexRow)}
            indexRow={indexRow}
            key={`tr_${indexRow}`}
            line={line}
            onHover={(indexCol) => onHover(indexRow, indexCol)}
          />
        ))}
      </tbody>
    </table>
  );
};
