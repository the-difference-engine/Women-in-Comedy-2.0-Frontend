// export default function(state = null, action ) {
//   console.log("Action Received", action)
//   return state
// }


import { EDIT_USER } from '../actions/types'; 

export default function(state = {}, action ) {
  console.log("Action", action)
  switch (action.type) {
    case EDIT_USER:
      // return state.concat([ action.payload.data ]); //same as below 
      return action.payload.data;
  }
  return state
}