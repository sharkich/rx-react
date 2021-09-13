import { FC, useCallback, useEffect, useState } from 'react';
import { Observable, Subject } from 'rxjs';

import { Timer } from './Timer';

const rendersCounts: { [key: string]: number } = {};

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

  rendersCounts[`${indexRow}${indexCol}`] = rendersCounts[`${indexRow}${indexCol}`]
    ? rendersCounts[`${indexRow}${indexCol}`] + 1
    : 1;

  return (
    <td
      className={hovered ? 'cell hover' : highlighted ? 'highlighted' : 'cell'}
      key={`td_${indexCol}`}
      onMouseOver={onMouseOver}
    >
      {`${rendersCounts[`${indexRow}${indexCol}`]}`}
    </td>
  );
};
