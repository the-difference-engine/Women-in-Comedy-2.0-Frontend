import { FETCH_PENDING_USER_CONNECTIONS, ACCEPT_CONNECTION } from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case FETCH_PENDING_USER_CONNECTIONS:
      return action.payload.data;
    case ACCEPT_CONNECTION:
      return state;
    default:
      return state;
  }
};
