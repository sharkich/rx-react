import { FC } from 'react';

import { Row } from '../../components/Row';
import { useViewModel } from './useViewModel';

export const Table: FC = () => {
  const { table, onSelect, selected, getSelectedRow } = useViewModel();
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
          selected$={getSelectedRow(indexRow)}
          onSelect={onSelect}
        />
      ))}
    </div>
  );
};
