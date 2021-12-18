import { DECREMENT, INCREMENT, PLUS } from './action-types';
import { Action, Reducer } from './models';
import { reducer } from './reducer';

class Store<T> {
  private _state: T;

  constructor(private reducer: Reducer<T>, initialState: T) {
    this._state = initialState;
  }

  getState(): T {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
  }
}

let store = new Store<number>(reducer, 0);
console.log(store.getState());
store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });
console.log(store.getState());
store.dispatch({ type: PLUS, payload: 7 });
console.log(store.getState());
store.dispatch({ type: DECREMENT });
console.log(store.getState());
