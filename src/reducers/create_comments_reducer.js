import { COMMENT_POSTED, COMMENT_INPUT_CHANGE } from "../actions/types";

const INITIAL_STATE = '';
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case COMMENT_INPUT_CHANGE:
      return action.payload;
    case COMMENT_POSTED:
      return INITIAL_STATE;
    default:
      return state;
  }
};