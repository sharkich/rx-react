import { BehaviorSubject } from 'rxjs';

import { ICell } from '../interfaces/ICell';
import { Optional } from '../interfaces/Optional';

export const selected$ = new BehaviorSubject<Optional<ICell>>(null);
