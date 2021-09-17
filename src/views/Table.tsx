import { FC } from 'react';

import { Row } from '../components/Row';

interface Props {
  table: number[][];
}

export const Table: FC<Props> = ({ table }) => {
  if (!table) {
    return null;
  }

  return (
    <div className="table">
      {table.map((row, indexRow) => (
        <Row indexRow={indexRow} key={`tr_${indexRow}`} line={row} />
      ))}
    </div>
  );
};
