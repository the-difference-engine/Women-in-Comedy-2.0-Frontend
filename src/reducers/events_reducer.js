import { CREATE_EVENT } from '../actions/types';

export default function(state = {}, action) {
  switch(action.type) {
    case CREATE_EVENT:
      console.log(action.payload);
      return action.payload
    default:
      return state;
  }
};
