import { CREATE_CONNECTION_REQUEST } from '../actions/types';

export default (state = {}, action) => {
  switch(action.type) {

    case CREATE_CONNECTION_REQUEST:
      console.log('create connection', action.payload.data);
      return action.payload.data;
    default:
      return state;
  }
}
