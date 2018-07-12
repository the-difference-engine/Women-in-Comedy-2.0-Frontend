import axios from 'axios';
import { FETCH_USERS, FILTER_USERS } from "./types";

export const fetchUsers = () => {
  const request = axios({
    method: 'get',
    url: process.env.REACT_APP_API_ENDPOINT + 'users/all_users'
  });
  return {
    type: FETCH_USERS,
    payload: request
  };
};
