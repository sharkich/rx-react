import { BehaviorSubject } from 'rxjs';

export const SIZE_DEFAULT_VALUE = 10;

export const size$ = new BehaviorSubject(SIZE_DEFAULT_VALUE);
