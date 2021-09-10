import { FC } from 'react';

interface Props {
  indexRow: number;
  indexCol: number;
  onHover: () => void;
  hovered: boolean;
  highlighted: boolean;
}

export const Cell: FC<Props> = ({ indexRow, indexCol, onHover, hovered, highlighted }) => {
  return (
    <td
      className={hovered ? 'cell hover' : highlighted ? 'highlighted' : 'cell'}
      key={`td_${indexCol}`}
      onMouseOver={onHover}
    >{`${indexRow}.${indexCol}`}</td>
  );
};
