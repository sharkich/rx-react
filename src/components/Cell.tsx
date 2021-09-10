import { FC } from 'react';

interface Props {
  indexRow: number;
  indexCol: number;
}

export const Cell: FC<Props> = ({ indexRow, indexCol }) => {
  return <td key={`td_${indexCol}`}>{`${indexRow}.${indexCol}`}</td>;
};
