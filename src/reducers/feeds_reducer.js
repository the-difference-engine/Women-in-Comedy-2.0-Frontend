import { FETCH_USER_FEEDS } from '../actions';
const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER_FEEDS:
      return [...INITIAL_STATE, ...action.payload.data];
    default:
      return state;
  }
};
