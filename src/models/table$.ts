import { map } from 'rxjs';

import { size$ } from './size$';

export const table$ = size$.pipe(
  map((size) => {
    const line = new Array(size).fill(0).map(() => 0);
    return new Array(size).fill(null).map(() => line);
  })
);
