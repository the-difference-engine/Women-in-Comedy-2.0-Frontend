import { FETCH_MEETING_OPTIONS } from '../actions/types';

const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
  switch(action.type){
    case FETCH_MEETING_OPTIONS:
      // return action.payload.data;
      return [...state, ...action.payload.data];
    default:
      return state;
  }
}

