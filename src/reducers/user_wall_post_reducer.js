import { USER_WALL_INPUT_CHANGE, POSTED } from '../actions/types';

const INITIAL_STATE = '';
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case USER_WALL_INPUT_CHANGE:
      return {...state, ...action.payload}
      // return action.payload;
    case POSTED:
      return INITIAL_STATE;
    default:
      return state;
  }
};
