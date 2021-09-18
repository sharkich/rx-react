import { FC } from 'react';
import { map } from 'rxjs';

import { Row } from '../../components/Row';
import { selected$ } from '../../models/selected';
import { useViewModel } from './useViewModel';

export const Table: FC = () => {
  const { table, onSelect, selected } = useViewModel();
  if (!table) {
    return null;
  }

  return (
    <div className={'table ' + (selected ? 'selected' : '')}>
      {table.map((row, indexRow) => (
        <Row
          indexRow={indexRow}
          key={`tr_${indexRow}`}
          line={row}
          selected$={selected$.pipe(map((value) => (value && value.indexRow === indexRow ? value.indexCol : null)))}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
