import { FC, useEffect, useMemo, useState } from 'react';
import { filter, interval, map, noop, Observable, switchMapTo, tap } from 'rxjs';

interface Props {
  start: number;
  hovered$: Observable<boolean>;
}

export const Timer: FC<Props> = ({ start, hovered$ }) => {
  const [value, setValue] = useState(start);

  // const timer$: Observable<number> = useMemo(
  //   () =>
  //     hovered$.pipe(
  //       filter((hovered) => hovered),
  //       switchMapTo(interval(1000).pipe(tap(() => setValue((v) => v + 1))))
  //     ),
  //   [hovered$]
  // );
  //
  // // const timer$: Observable<number> = useMemo(() => interval(10).pipe(tap(() => setValue((v) => v + 1))), []);
  //
  // useEffect(() => {
  //   const subsValue$ = timer$.subscribe(noop);
  //   return () => {
  //     subsValue$.unsubscribe();
  //   };
  // }, [timer$]);

  return <div>{value}</div>;
};
