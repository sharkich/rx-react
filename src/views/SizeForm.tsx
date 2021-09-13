import { FC, useEffect, useState } from 'react';

import { size$ } from '../models/size$';
import { useSubscribe } from '../utils/useSubscribe';

export const SizeForm: FC = () => {
  const size = useSubscribe(size$);
  const [value, setValue] = useState(`${size || ''}`);
  useEffect(() => {
    setValue(`${size || ''}`);
  }, [size]);

  const onSubmit = () => {
    setValue('');
    size$.next(Number(value));
  };
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        onSubmit();
      }}
    >
      <input value={value} onChange={(event) => setValue(event.target.value)} />
      <button type="submit">submit</button>
    </form>
  );
};
