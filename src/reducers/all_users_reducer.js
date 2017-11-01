import { FETCH_ALL_USERS, FILTER_USERS } from '../actions/types';
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
    case FILTER_USERS:
      // const filterUserList = state.userList.filter((user) => user.includes(action.selectedItem))
      return {
        ...state,
        // filterUserList,
        selectedItem: action.payload

      }
    default:
      return state;
  }
}
