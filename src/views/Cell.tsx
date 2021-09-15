import _ from 'lodash';
import { FC, useEffect, useState } from 'react';
import { map } from 'rxjs';

import { renderInc } from '../models/renders';
import { selected$ } from '../models/selected$';

interface Props {
  indexRow: number;
  indexCol: number;
}

export const Cell: FC<Props> = ({ indexRow, indexCol }) => {
  const id = `${indexRow}.${indexCol}`;
  renderInc(id);
  console.log(`render.cell.${id}`);

  const [isSelected, setIsSelected] = useState(false);
  useEffect(() => {
    const subscription$ = selected$
      .pipe(map((selected) => _.isEqual(selected, { indexRow, indexCol })))
      .subscribe(setIsSelected);
    return () => {
      subscription$.unsubscribe();
    };
  }, [indexRow, indexCol]);

  return (
    <td
      className={isSelected ? 'selected-cell' : 'cell'}
      key={`td_${id}`}
      onClick={() => selected$.next({ indexRow, indexCol })}
    >
      {id}
    </td>
  );
};
