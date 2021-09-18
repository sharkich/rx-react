import { FC } from 'react';

import { Row } from '../components/Row';
import { table$ } from '../models/table';
import { useSubscribe } from '../utils/useSubscribe';

export const Table: FC = () => {
  const table = useSubscribe(table$);
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
