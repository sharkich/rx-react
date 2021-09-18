import { FC } from 'react';
import { Observable } from 'rxjs';

import { useSubscribe } from '../utils/useSubscribe';

interface Props {
  id: string;
  onSelect: () => void;
  selected$: Observable<boolean>;
}

export const Cell: FC<Props> = ({ id, onSelect, selected$ }) => {
  const selected = useSubscribe(selected$);
  return (
    <div className={'cell ' + (selected ? 'selected' : '')} key={`td_${id}`} onClick={onSelect}>
      {id}
    </div>
  );
};
