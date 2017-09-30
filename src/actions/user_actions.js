import axios from 'axios';
import { FETCH_USER_INFO, FETCH_ALL_USERS } from './types';

export const fetchUserInfo = (userId) => {
 const request = axios({
   method: 'get',
   url: 'http://localhost:9000/api/v1/users/info',
   headers: {"id": userId}
 });
 return (dispatch) => {
   request.then((data) => {
     dispatch({ type: FETCH_USER_INFO, payload: request })
   });
 };
};

export const fetchAllUsers = () => async dispatch => {
  const request = await axios('http://localhost:9000/api/v1/users');
  dispatch({ type: FETCH_ALL_USERS, payload: request });
}
