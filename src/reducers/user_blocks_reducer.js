import { FETCH_BLOCKED_USERS, FETCH_BLOCKED_BY } from '../actions/types';

export default (state = [], action) => {
    switch(action.type) {
      case FETCH_BLOCKED_USERS:
        return action.payload.data;
      case FETCH_BLOCKED_BY:
        return action.payload.data;
      default:
        return state;
    }
  }