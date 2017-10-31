import axios from 'axios';
import { FETCH_USERS, SELECTED_ITEM_CHANGED } from "./types";

export const fetchUsers = () => {
  const request = axios({
    method: 'get',
    url: 'http://localhost:9000/api/v1/users/all_users'
  });
  return {
    type: FETCH_USERS,
    payload: request
  };
};

export const selected_item_changed = (value) => {
  return {
    type: SELECTED_ITEM_CHANGED,
    payload: value
  }
}
