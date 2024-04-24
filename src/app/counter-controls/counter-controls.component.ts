import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { decrement, increment } from '../store/counter.actions';

@Component({
  selector: 'app-counter-controls',
  templateUrl: './counter-controls.component.html',
  styleUrls: ['./counter-controls.component.css'],
})
export class CounterControlsComponent {
  constructor(private store: Store) {}

  increment() {
    this.store.dispatch(increment({ payload: 2 }));
  }

  decrement() {
    this.store.dispatch(decrement({ payload: 1 }));
  }

  // implementation with legacy actions
  // increment() {
  //   this.store.dispatch(new IncrementAction(2));
  // }

  // decrement() {
  //   this.store.dispatch(new DecrementAction(1));
  // }
}
