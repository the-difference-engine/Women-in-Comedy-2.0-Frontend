import { EVENT_WALL_INPUT_CHANGE, POSTED } from '../actions/types';

const INITIAL_STATE = '';

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case POSTED:
      return INITIAL_STATE;
    case EVENT_WALL_INPUT_CHANGE:
      return action.payload;
    default:
      return state;
  }
};
