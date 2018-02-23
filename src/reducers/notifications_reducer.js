import { FETCH_NOTIFICATIONS } from '../actions/types';
export default (state = null, action) => {
  switch(action.type) {
    case FETCH_NOTIFICATIONS:
      return action.payload.data;
    default:
      return state;
  }
};
