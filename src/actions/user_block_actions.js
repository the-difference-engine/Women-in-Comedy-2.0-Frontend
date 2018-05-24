import axios from 'axios';
import { FETCH_BLOCKED_USERS, FETCH_BLOCKED_BY } from './types';

export const fetchBlockedUsers = (userId) => async dispatch => {
  const request = await axios({
    method: 'get',
    url: process.env.REACT_APP_API_URL_DEV + 'users/blocked',
    headers: {"id": userId},
  });
  // return (dispatch) => {
  //   request.then((data) => {
      dispatch({ type: FETCH_BLOCKED_USERS, payload: request })
  //   });
  // };
};

export const fetchBlockedBy = (userId) => {
  const request = axios({
    method: 'get',
    url: process.env.REACT_APP_API_URL_DEV + 'users/blocked_by',
    headers: {"id": userId},
  });
  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: FETCH_BLOCKED_BY, payload: request })
    });
  };
};
