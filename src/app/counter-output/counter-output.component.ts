import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Store } from '@ngrx/store';
import { selectCount, selectDoubleCount } from '../store/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.css'],
})
export class CounterOutputComponent {
  // -$ when variable holds an Observable (convention)
  count$: Observable<number>; // they need async pipe in template or subscribe function
  doubleCount$: Observable<number>; // they need async pipe in template or subscribe function

  constructor(private store: Store<{ counter: number }>) {
    // reading data from the store
    // "counter": which key used in StoreModule.forRoot() method
    this.count$ = store.select(selectCount);
    this.doubleCount$ = store.select(selectDoubleCount);
  }
}
