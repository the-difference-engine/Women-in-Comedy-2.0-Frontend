import { CREATE_EVENT } from '../actions/types';
import { FETCH_USER_EVENTS } from '../actions';

const INITIAL_STATE = {};

export default function(state = INITIAL_STATE, action) {
export default function(state = {}, action) {
  switch(action.type) {
    case CREATE_EVENT:
      console.log(action.payload);
      return action.payload
    case FETCH_USER_EVENTS:
			return action.payload.data;
    default:
      return state;
  }
};

    default:
      return state;
  }
};
