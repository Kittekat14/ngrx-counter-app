import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { decrement, increment, init, set } from './counter.actions';
import { tap, withLatestFrom, switchMap, of } from 'rxjs';
import { Store } from '@ngrx/store';
import { selectCount } from './counter.selectors';

@Injectable()
export class CounterEffects {
  // actions$ is an Observable
  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}

  // this is an effect that gets the saved count from localStorage:
  loadCount = createEffect(() =>
    this.actions$.pipe(
      // whenever the app restarts (app.ts => ngOnInit) = refresh the website!
      ofType(init),
      // switchMap: switch to a fresh actions$ Observable chain;
      // switchMap must have an Observable returned => convert action object into an Observable by "of()"
      // you get the count from localStorage
      switchMap(() => {
        const storedCounter = localStorage.getItem('count');
        // and if there is a count saved there, use the set action function with the saved value
        if (storedCounter) {
          // +storedCounter must be converted to a number from a string in localStorage
          return of(set({ payload: +storedCounter }));
        }
        // if not, use the set action function that sets the store to 0 again
        return of(set({ payload: 0 }));
      })
    )
  );

  // this is an effect that saves the count to the localStorage:
  saveCount = createEffect(
    () =>
      // our dispatched actions of type increment and decrement
      this.actions$.pipe(
        // this effect happens when the mentioned actions happen
        ofType(increment, decrement),
        // the latest value of store = counter number; returns an array of diff. kinds of data
        withLatestFrom(this.store.select(selectCount)),
        // tap: this does not dispatch a new Observable
        // each action's payload gets now saved to the localStorage
        tap(([action, currentState]) => {
          console.log(action);
          console.log(currentState);
          localStorage.setItem('count', currentState.toString());
        })
      ),
    // this effect does no further dispatching of a new action!
    { dispatch: false }
  );
}
