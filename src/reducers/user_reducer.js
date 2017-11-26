import { FETCH_USER_INFO, EDIT_USER } from '../actions/types';
const INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER_INFO:
      return action.payload.data;

    case EDIT_USER:
      return action.payload;

    default:
      return state;
  }
};
