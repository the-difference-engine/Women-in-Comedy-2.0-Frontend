import { FETCH_USER_FEEDS } from './types';
import axios from 'axios';

export const fetchUserFeeds = (userId) => {
 const request = axios({
   method: 'get',
   url: process.env.REACT_APP_API_URL_DEV + 'users/feed',
   headers: {"id": userId}
 });
 return (dispatch) => {
   request.then((data) => {
     dispatch({ type: FETCH_USER_FEEDS, payload: request })
   });
 };
};
