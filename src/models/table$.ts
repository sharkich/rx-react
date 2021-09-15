import { map } from 'rxjs';

import { rendersClear } from './renders';
import { size$ } from './size$';

export const table$ = size$.pipe(
  map((size) => {
    rendersClear();
    const line = new Array(size).fill(0).map(() => 0);
    return new Array(size).fill(null).map(() => line);
  })
);
