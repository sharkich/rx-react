import { FC, useCallback, useEffect, useState } from 'react';
import { Observable, Subject } from 'rxjs';

import { Timer } from './Timer';

interface Props {
  indexRow: number;
  indexCol: number;
  hover$: Subject<{ indexRow: number; indexCol: number }>;
}

export const Cell: FC<Props> = ({ indexRow, indexCol, hover$ }) => {
  const [hovered, setHovered] = useState(false);
  const [highlighted, setHighlighted] = useState(false);

  const onChange = (hover: { indexRow: number; indexCol: number }) => {
    if (hover.indexRow === indexRow && hover.indexCol === indexCol) {
      setHovered(true);
    } else {
      setHovered(false);
      if (hover.indexRow === indexRow || hover.indexCol === indexCol) {
        setHighlighted(true);
      } else {
        setHighlighted(false);
      }
    }
  };

  useEffect(() => {
    const subsHovered$ = hover$.subscribe(onChange);
    return () => {
      subsHovered$.unsubscribe();
    };
  }, []);

  const onMouseOver = useCallback(() => hover$.next({ indexRow, indexCol }), []);

  return (
    <td
      className={hovered ? 'cell hover' : highlighted ? 'highlighted' : 'cell'}
      key={`td_${indexCol}`}
      onMouseOver={onMouseOver}
    >
      {/*<Timer hovered$={hovered$} start={Number(`${indexRow}${indexCol}`)} />*/}
      {`${indexRow}${indexCol}`}
    </td>
  );
};
