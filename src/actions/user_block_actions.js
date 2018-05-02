import axios from 'axios';
import { FETCH_BLOCKED_USERS, FETCH_BLOCKED_BY} from './types';

export const fetchBlockedUsers = (userId) => {
 const request = axios({
   method: 'get',
   url: process.env.REACT_APP_API_URL_DEV + '/users/blocked',
   headers: {"id": userId},
 });
 return (dispatch) => {
   request.then((data) => {
     dispatch({ type: FETCH_BLOCKED_USERS, payload: request })
   });
 };
};

export const fetchBlockedBy = (userId) => {
    const request = axios({
      method: 'get',
      url: process.env.REACT_APP_API_URL_DEV + '/users/blockedby',
      headers: {"id": userId},
    });
    return (dispatch) => {
      request.then((data) => {
        dispatch({ type: FETCH_BLOCKED_BY, payload: request })
      });
    };
   };
