import { table$ } from '../../models/table';
import { useSubscribe } from '../../utils/useSubscribe';

export const useViewModel = () => {
  const table = useSubscribe(table$);

  return { table };
};
