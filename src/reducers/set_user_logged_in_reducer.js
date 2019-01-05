import {SET_USER_LOGGED_IN } from '../actions/types';

const userId = sessionStorage.getItem('userId');

const INITIAL_STATE = userId ? {loggedIn: true, userId: userId} : {loggedIn: false}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case SET_USER_LOGGED_IN:
      return {...state, loggedIn: action.loggedIn, userId: action.userId }
    default:
      return state;
  }
}

