import { FETCH_USER_CONNECTIONS } from '../actions/types';

const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER_CONNECTIONS:
      
      return [...state, ...action.payload.data];
    default:
      return state;
  }
};
