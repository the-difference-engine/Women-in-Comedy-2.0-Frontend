import { FETCH_UPCOMING_EVENTS } from '../actions/types';

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_UPCOMING_EVENTS:
      return { ...state, ...action.payload.data }
    default:
      return state;
  }
};

//done