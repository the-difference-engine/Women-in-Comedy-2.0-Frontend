import axios from 'axios';
import { FETCH_USER_INFO } from './types';

export const fetchUserInfo = (userId) => {
 console.log('fetchUserInfo');
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