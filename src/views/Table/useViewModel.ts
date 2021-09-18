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

  return { table, onSelect };
};
