import { FETCH_MY_UPCOMING_EVENTS } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_MY_UPCOMING_EVENTS:
     return { ...state, ...action.payload }
    default:
      return state;
  }
};

//done
