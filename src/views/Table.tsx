import { FC } from 'react';

import { table$ } from '../models/table$';
import { useSubscribe } from '../utils/useSubscribe';
import { Row } from './Row';

export const Table: FC = () => {
  const table = useSubscribe(table$);
  if (!table) {
    return null;
  }
  console.log('table.render');
  return (
    <table className="table">
      <tbody>
        {table.map((row, indexRow) => (
          <Row indexRow={indexRow} key={`tr_${indexRow}`} line={row} />
        ))}
      </tbody>
    </table>
  );
};
