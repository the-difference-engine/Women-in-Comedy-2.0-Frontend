import { FETCH_EVENT_INFO, FETCH_HOST_PHOTO } from '../actions/types';

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_EVENT_INFO:
      return {...state, ...action.payload.data};
    case FETCH_HOST_PHOTO:
      return {...state, hostInfo: action.payload.data};
    default:
      return state;
  }
};
