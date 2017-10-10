import { SUSPEND_USER } from '../actions/types'; 

export default (state = {}, action) => {
  switch(action.type) {
    case SUSPEND_USER:
      return state;
    default:
      return state; 
  } 
};