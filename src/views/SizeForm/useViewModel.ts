import { useEffect, useState } from 'react';

import { selected$ } from '../../models/selected';
import { size$ } from '../../models/size';

export const useViewModel = () => {
  const [value, setValue] = useState('');

  // Add default value
  useEffect(() => {
    const subscription$ = size$.subscribe((size) => setValue(`${size}`));
    subscription$.unsubscribe();
  }, []);

  const onSubmit = () => {
    console.log('value', value);
    size$.next(Number(value));
    selected$.next(null);
  };

  return {
    onSubmit,
    value,
    setValue,
  };
};
