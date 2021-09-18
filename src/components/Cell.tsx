import { FC } from 'react';

interface Props {
  id: string;
  onSelect: () => void;
}

export const Cell: FC<Props> = ({ id, onSelect }) => (
  <div className="cell" key={`td_${id}`} onClick={onSelect}>
    {id}
  </div>
);
