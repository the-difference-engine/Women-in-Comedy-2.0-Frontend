import { CREATE_CONNECTION_REQUEST, FETCH_CONNECTION_STATUS } from '../actions/types';
const INITIAL_STATE = {
}
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CREATE_CONNECTION_REQUEST:
      return action.payload.data;
    case FETCH_CONNECTION_STATUS:
      return action.payload.data || {};
    default:
      return state;
  }
}
