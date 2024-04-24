import { createReducer, on } from '@ngrx/store';
import { decrement, increment, set } from './counter.actions';

const initialState = 0;

// newer way of handling state/reducer and actions:
export const counterReducer = createReducer(
  initialState,
  on(increment, (state, action) => state + action.payload),
  on(decrement, (state, action) => state - action.payload),
  on(set, (state, action) => action.payload)
);

// alternative, legacy way of creating reducers:
// export function counterReducer(
//   state = initialState,
//   action: CounterActions | Action
// ) {
//   switch (action.type) {
//     case '[Counter] Increment':
//       return state + (action as IncrementAction).payload;
//       break;
//     case '[Counter] Decrement':
//       return state - (action as IncrementAction).payload;
//       break;

//     default:
//       return state;
//       break;
//   }
//   return state;
// }
