import { FC } from 'react';

import { Row } from '../../components/Row';
import { useViewModel } from './useViewModel';

export const Table: FC = () => {
  const { table } = useViewModel();
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
