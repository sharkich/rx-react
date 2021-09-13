import { useEffect, useState } from 'react';
import { Observable } from 'rxjs';

export const useSubscribe = <T>(observer$: Observable<T>, defaultValue?: T) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    const subscription$ = observer$.subscribe(setValue);
    return () => {
      subscription$.unsubscribe();
    };
  }, [observer$]);

  return value;
};
