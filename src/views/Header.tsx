import { FC } from 'react';

import { size$ } from '../models/size';
import { useSubscribe } from '../utils/useSubscribe';

export const Header: FC = () => {
  const size = useSubscribe(size$);

  return <header className="App-header">Hello World ({size})</header>;
};
