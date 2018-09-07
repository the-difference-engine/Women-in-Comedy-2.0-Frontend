import { EDIT_USER } from '../actions/types'; 

export default function(state = {}, action ) {
  switch (action.type) {
    case EDIT_USER:
      return action.payload.data;

    default:
      return state;
  }
}