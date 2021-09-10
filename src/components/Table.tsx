import { FC } from 'react';

import { Row } from './Row';

interface Props {
  size: number;
}

export const Table: FC<Props> = ({ size }) => {
  const line = new Array(size).fill(null);
  return (
    <table className="table">
      {line.map((_, indexRow) => (
        <Row indexRow={indexRow} key={`tr_${indexRow}`} line={line} />
      ))}
    </table>
  );
};
