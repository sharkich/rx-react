import { FC } from 'react';

import { selected$ } from '../models/selected';
import { size$ } from '../models/size';
import { useSubscribe } from '../utils/useSubscribe';

export const Header: FC = () => {
  const size = useSubscribe(size$);
  const selected = useSubscribe(selected$);

  return (
    <header className="App-header">
      Hello World ({size})({JSON.stringify(selected)})
    </header>
  );
};
