import { Action, Reducer } from './models';
import { DECREMENT, INCREMENT, PLUS } from './action-types';

export const reducer: Reducer<number> = (state: number, action: Action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    case PLUS:
      return state + action.payload;

    default:
      return state;
  }
};
