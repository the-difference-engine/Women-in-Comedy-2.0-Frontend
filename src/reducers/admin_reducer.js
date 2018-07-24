import {
  SUSPEND_USER,
  UNSUSPEND_USER,
  DELETE_USER,
  EMAIL_USERS
} from "../actions/types";

export default (state = {}, action) => {
  switch (action.type) {
    case SUSPEND_USER:
      return {
        ...state,
        suspended: action.suspended
      };

    case UNSUSPEND_USER:
      return {
        ...state,
        suspended: action.suspended
      };

    case DELETE_USER:
      return state;

    case EMAIL_USERS:
      return state;

    default:
      return state;
  }
};
