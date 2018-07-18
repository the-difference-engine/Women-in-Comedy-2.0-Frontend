import {
  FETCH_BLOCKED_USERS,
  FETCH_BLOCKED_BY,
  CREATE_BLOCK
} from "../actions/types";

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_BLOCKED_USERS:
      return action.payload.data;
    case FETCH_BLOCKED_BY:
      return action.payload.data;
    case CREATE_BLOCK:
      return state;
    default:
      return state;
  }
};
