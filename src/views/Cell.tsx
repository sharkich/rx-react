import { FC } from 'react';
import { Observable } from 'rxjs';

import { renderInc } from '../models/renders';
import { useSubscribe } from '../utils/useSubscribe';

interface Props {
  indexRow: number;
  indexCol: number;
  selected$: Observable<boolean>;
  onSelect: () => void;
}

export const Cell: FC<Props> = ({ indexRow, indexCol, selected$, onSelect }) => {
  const id = `${indexRow}.${indexCol}`;
  renderInc(id);
  console.log(`render.cell.${id}`);

  const isSelected = useSubscribe(selected$);

  return (
    <div className={'cell ' + (isSelected ? 'selected' : '')} key={`td_${id}`} onClick={onSelect}>
      {id}
    </div>
  );
};
