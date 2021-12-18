import { Action } from '../basics/models';
import { ADD_MESSAGE, DELETE_MESSAGE } from './message-action-types';

export interface AddMessageAction extends Action {
  message: string;
}

export interface DeleteMessageAction extends Action {
  index: number;
}

export class MessageActions {
  static addMessage(message: string): AddMessageAction {
    return {
      type: ADD_MESSAGE,
      message,
    };
  }

  static deleteMessage(index: number): DeleteMessageAction {
    return {
      type: DELETE_MESSAGE,
      index,
    };
  }
}
