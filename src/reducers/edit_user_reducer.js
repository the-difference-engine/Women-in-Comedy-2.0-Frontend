import { EDIT_USER } from '../actions/types';

export default (state = null, action) => {
  switch (action.type) {
    case EDIT_USER:
      return action.payload;
  }
  return state;
}
