import {SET_USER_LOGGED_IN } from '../actions/types';

// const INITIAL_STATE = { isUserLoggedIn: false };

export default (state = {}, action) => {
  switch (action.type) {
    case SET_USER_LOGGED_IN:
      return { loggedIn: action.loggedIn }
    default:
      return state;
  }

}
