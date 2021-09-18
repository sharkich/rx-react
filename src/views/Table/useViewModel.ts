import { useEffect, useState } from 'react';
import { map } from 'rxjs';

import { ICell } from '../../interfaces/ICell';
import { selected$ } from '../../models/selected';
import { table$ } from '../../models/table';
import { useSubscribe } from '../../utils/useSubscribe';

export const useViewModel = () => {
  const table = useSubscribe(table$);

  const onSelect = (cell: ICell) => {
    console.log('cell', cell);
    selected$.next(cell);
  };

  const [selected, useSelected] = useState(false);
  useEffect(() => {
    const subscription = selected$.pipe(map((cell) => !!cell)).subscribe(useSelected);
    return () => {
      subscription.unsubscribe();
    };
  }, []);

  return { table, onSelect, selected };
};
