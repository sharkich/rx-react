import { BehaviorSubject } from 'rxjs';

import { Cell } from '../interfaces/cell';
import { Optional } from '../interfaces/Optional';

export const selected$ = new BehaviorSubject<Optional<Cell>>(null);
