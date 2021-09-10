import { FC } from 'react';

import { Row } from './Row';

interface Props {
  size: number;
  onHover: (indexRow: number, indexCol: number) => void;
  hover: { indexRow: number; indexCol: number };
}

export const Table: FC<Props> = ({ size, hover, onHover }) => {
  const line = new Array(size).fill(null);
  return (
    <table className="table">
      <tbody>
        {line.map((_, indexRow) => (
          <Row
            highlightedCellIndex={hover.indexCol}
            hoveredIndexCol={hover.indexRow === indexRow ? hover.indexCol : null}
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
