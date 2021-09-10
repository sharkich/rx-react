import { FC } from 'react';

interface Props {
  indexRow: number;
  indexCol: number;
  onHover: () => void;
  hover: boolean;
}

export const Cell: FC<Props> = ({ indexRow, indexCol, onHover, hover }) => {
  return (
    <td
      className={hover ? 'cell hover' : 'cell'}
      key={`td_${indexCol}`}
      onMouseOver={onHover}
    >{`${indexRow}.${indexCol}`}</td>
  );
};
