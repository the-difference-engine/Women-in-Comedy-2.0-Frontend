import axios from 'axios';
import { FETCH_USERS, FILTER_USERS } from "./types";

export const fetchUsers = () => {
  const request = axios({
    method: 'get',
    url: process.env.APP_API_URL + 'users/all_users'
  });
  return {
    type: FETCH_USERS,
    payload: request
  };
};
