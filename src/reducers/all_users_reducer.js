import { FETCH_ALL_USERS, SELECTED_ITEM_CHANGED } from '../actions/types';
const INITIAL_STATE = {
  open: false,
  selectedItem: 'none',
  userList: []
}


export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        userList: action.payload.data
      };
    case SELECTED_ITEM_CHANGED:
      return {
        ...state,
        selectedItem: action.payload,
      }
    default:
      return state;
  }
}
