import { FC } from 'react';

import { selected$ } from '../models/selected$';
import { SIZE_DEFAULT_VALUE, size$ } from '../models/size$';
import { useSubscribe } from '../utils/useSubscribe';

export const Header: FC = () => {
  const size = useSubscribe(size$, SIZE_DEFAULT_VALUE);
  const selected = useSubscribe(selected$, null);
  console.log('Header.render', { size, selected });

  return (
    <header className="App-header">
      Hello World ({size}) ({JSON.stringify(selected)})
    </header>
  );
};
