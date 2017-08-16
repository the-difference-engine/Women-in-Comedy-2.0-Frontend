import { FETCH_USER_CONNECTIONS } from '../actions';

const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER_CONNECTIONS:
      return action.payload.data;
    default:
      return INITIAL_STATE;
  }
};
