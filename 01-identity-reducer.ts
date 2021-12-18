import { DECREMENT, INCREMENT } from './action-types';

interface Action {
  type: string;
  payload?: any;
}

interface Reducer<T> {
  (state: T, action: Action): T;
}

let incrementAction: Action = { type: INCREMENT };
let decrementAction: Action = { type: DECREMENT };
let unKnownAction: Action = { type: 'UNKNOWN' };

let reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

console.log(reducer(10, decrementAction));
console.log(reducer(13, incrementAction));
console.log(reducer(13, unKnownAction));
