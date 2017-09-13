import { FETCH_EVENT_INFO } from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_EVENT_INFO:
      return action.payload.data;
    default:
      return state;
  }
};
