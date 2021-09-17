import { FC } from 'react';

interface Props {
  indexRow: number;
  indexCol: number;
}

export const Cell: FC<Props> = ({ indexRow, indexCol }) => {
  const id = `${indexRow}.${indexCol}`;

  return (
    <div className="cell" key={`td_${id}`}>
      {id}
    </div>
  );
};
