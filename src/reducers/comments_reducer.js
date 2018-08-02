import { FETCH_POST_COMMENTS } from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_POST_COMMENTS:
      return action.payload.data;
    default:
      return state;
  }
};