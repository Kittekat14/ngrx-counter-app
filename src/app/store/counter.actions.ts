import { Action, createAction, props } from '@ngrx/store';

// Loading data from localStorage:
// starts the side effect pipe(line) that reaches to the localStorage for count value
export const init = createAction('[Counter] Init');

// should after init set the count from the saved value in localStorage
export const set = createAction('[Counter] Set', props<{ payload: number }>());

// these actions are functions that get executed when we dispatch the action
export const increment = createAction(
  // this is the type, which points to with [] to which feature this action belongs
  '[Counter] Increment',
  // attaching data to the action:
  props<{ payload: number }>()
);

export const decrement = createAction(
  // this is the type, which points to with [] to which feature this action belongs
  '[Counter] Decrement',
  // attaching data to the action:
  props<{ payload: number }>()
);

// legacy way of creating actions:
// export class IncrementAction implements Action {
//   readonly type: string = '[Counter] Increment';

//   constructor(public payload: number) {}
// }

// export class DecrementAction implements Action {
//   readonly type: string = '[Counter] Decrement';

//   constructor(public payload: number) {}
// }

// export type CounterActions = IncrementAction | DecrementAction;
