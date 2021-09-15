import { FC } from 'react';

import { renderInc, renders } from '../models/renders';
import { selected$ } from '../models/selected$';

interface Props {
  indexRow: number;
  indexCol: number;
}

export const Cell: FC<Props> = ({ indexRow, indexCol }) => {
  const id = `${indexRow}${indexCol}`;
  renderInc(id);
  console.log(`cell.${id}.${renders[id]}.render`);
  return (
    <td className={'cell'} key={`td_${id}`} onClick={() => selected$.next({ indexRow, indexCol })}>
      {renders[id]}
    </td>
  );
};
