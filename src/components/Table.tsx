import { FC, useMemo } from 'react';
import { Subject } from 'rxjs';

import { Row } from './Row';

interface Props {
  size: number;
  hover$: Subject<{ indexRow: number; indexCol: number }>;
}

export const Table: FC<Props> = ({ size, hover$ }) => {
  // eslint-disable-next-line @typescript-eslint/no-unsafe-return
  const line = useMemo(() => new Array(size).fill(null), []);

  return (
    <table className="table">
      <tbody>
        {line.map((_, indexRow) => (
          <Row hover$={hover$} indexRow={indexRow} key={`tr_${indexRow}`} line={line} />
        ))}
      </tbody>
    </table>
  );
};
