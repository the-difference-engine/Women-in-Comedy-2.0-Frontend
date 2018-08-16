import { EDIT_USER } from '../actions/types'; 

export default function(state = {}, action ) {
  switch (action.type) {
    case EDIT_USER:
      return {...state, ...action.payload.data};
  }
  return state
}