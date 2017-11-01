import axios from 'axios';
import { FETCH_USERS, FILTER_USERS } from "./types";

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
