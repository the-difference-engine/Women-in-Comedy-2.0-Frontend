import { CREATE_INVITE_REQUEST, FETCH_PENDING_USER_INVITES } from '../actions/types';

export default (state = [], action) => {
  switch(action.type) {
    case CREATE_INVITE_REQUEST:
      return action.payload.data;
    case FETCH_PENDING_USER_INVITES:
      return action.payload.data;
    default:
      return state;
  }
}