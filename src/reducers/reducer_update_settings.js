import { UPDATE_ADMIN_STATUS } from '../actions/types'; 

export default function(state = {}, action ) {
  switch (action.type) {
    case UPDATE_ADMIN_STATUS:
      return action.payload.data;
  }
  return state
}