import { FETCH_USER_INFO } from '../actions/types';
const INITIAL_STATE = {}
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_USER_INFO:
      console.log(action.payload.data)
      return action.payload.data;

    default:
      return state;
  }
};
