import { Action, Reducer } from '../basics/models';
import Store from '../basics/store';
import {
  AddMessageAction,
  MessageActions,
  DeleteMessageAction,
} from './action-creators';
import { ADD_MESSAGE, DELETE_MESSAGE } from './message-action-types';

interface AppState {
  messages: String[];
}

let reducer: Reducer<AppState> = (state: AppState, action: Action): AppState => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        messages: state.messages.concat((<AddMessageAction>action).message),
      };
    case DELETE_MESSAGE:
      let idx = (<DeleteMessageAction>action).index;
      return {
        messages: [
          ...state.messages.slice(0, idx),
          ...state.messages.slice(idx + 1, state.messages.length),
        ],
      };
    default:
      return state;
  }
};

let store = new Store<AppState>(reducer, { messages: [] });
console.log(store.getState());

store.dispatch(MessageActions.addMessage('I love ruby on rails so much'));

console.log(store.getState());

store.dispatch(MessageActions.addMessage('Hello there'));

console.log(store.getState());

store.dispatch(MessageActions.addMessage('I am loving angular with redux'));

console.log(store.getState());

store.dispatch(
  MessageActions.addMessage(
    'Rails & Angular is definitely the stack for 2022 and beyond',
  ),
);

console.log(store.getState());

store.dispatch(MessageActions.deleteMessage(1));

console.log(store.getState());
