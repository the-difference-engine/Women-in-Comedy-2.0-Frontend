import { FETCH_ALL_USERS, FILTER_USERS } from '../actions/types';
const INITIAL_STATE = {
  open: false,
  userList: [],
  filterUserList: []
}


export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_ALL_USERS:
      return {
        ...state,
        filterUserList: action.payload.data,
        userList: action.payload.data
      };
    case FILTER_USERS:
      var item = action.payload.item;
      var nestedItem = action.payload.nestedItem;
      var filterUserList = state.userList;
      if(item) {
         filterUserList = state.userList.filter(user => user[item] == nestedItem.toLowerCase());
      }
      return {
        ...state,
        filterUserList,
        selectedItem: action.payload

      }
    default:
      return state;
  }
}
