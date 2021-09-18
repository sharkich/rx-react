import { ICell } from '../../interfaces/ICell';
import { table$ } from '../../models/table';
import { useSubscribe } from '../../utils/useSubscribe';

export const useViewModel = () => {
  const table = useSubscribe(table$);

  const onSelect = (cell: ICell) => {
    console.log('cell', cell);
  };

  return { table, onSelect };
};
