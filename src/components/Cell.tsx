import { FC, useEffect, useState } from 'react';
import { Observable } from 'rxjs';

import { Timer } from './Timer';

interface Props {
  indexRow: number;
  indexCol: number;
  onHover: () => void;
  hovered$: Observable<boolean>;
  highlighted$: Observable<boolean>;
}

export const Cell: FC<Props> = ({ indexRow, indexCol, onHover, hovered$, highlighted$ }) => {
  const [hovered, setHovered] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  useEffect(() => {
    const subsHovered$ = hovered$.subscribe(setHovered);
    const subsHighlighted$ = highlighted$.subscribe(setHighlighted);
    console.log('hovered$ & highlighted$ .subscribe');
    return () => {
      subsHovered$.unsubscribe();
      subsHighlighted$.unsubscribe();
      console.log('hovered$ & highlighted$ .unsubscribe');
    };
  }, [hovered$, highlighted$]);

  return (
    <td
      className={hovered ? 'cell hover' : highlighted ? 'highlighted' : 'cell'}
      key={`td_${indexCol}`}
      onMouseOver={onHover}
    >
      {/*<Timer hovered$={hovered$} start={Number(`${indexRow}${indexCol}`)} />*/}
      {`${indexRow}${indexCol}`}
    </td>
  );
};
