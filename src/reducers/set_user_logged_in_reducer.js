import {SET_USER_LOGGED_IN } from '../actions/types';

const INITIAL_STATE = sessionStorage.getItem('userId') ? {loggedIn: true} : {loggedIn: false}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_LOGGED_IN:
      return {...state, loggedIn: action.loggedIn }
    default:
      return state;
  }

}
