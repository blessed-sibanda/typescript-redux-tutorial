import { DECREMENT, INCREMENT, PLUS } from './action-types';
import { Action, ListenerCallback, Reducer, UnsubscribeCallback } from './models';
import { reducer } from './reducer';

class Store<T> {
  private _state: T;
  private _listeners: ListenerCallback[] = [];

  constructor(private reducer: Reducer<T>, initialState: T) {
    this._state = initialState;
  }

  getState(): T {
    return this._state;
  }

  dispatch(action: Action): void {
    this._state = this.reducer(this._state, action);
    this._listeners.forEach((listener: ListenerCallback) => listener());
  }

  subscribe(listener: ListenerCallback): UnsubscribeCallback {
    this._listeners.push(listener);
    return () => {
      this._listeners = this._listeners.filter((l) => l !== listener);
    };
  }
}

let store = new Store<number>(reducer, 0);
console.log(store.getState());

let unsubscribe = store.subscribe(() => {
  console.log('subscribed: ', store.getState());
});

store.dispatch({ type: INCREMENT });
store.dispatch({ type: INCREMENT });

unsubscribe();
store.dispatch({ type: DECREMENT });
console.log(store.getState());
