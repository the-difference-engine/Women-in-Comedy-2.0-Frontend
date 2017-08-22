import { FETCH_USER_INFO } from '../actions';
const INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER_INFO:
      return action.payload.data;
    default:
      return state;
  }
};
