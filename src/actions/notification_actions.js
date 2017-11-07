import axios from 'axios';

import {
  FETCH_NOTIFICATIONS
} from './types';

export const fetchNotifications = (userId) => {

 const request = axios({
   method: 'get',
   url: `http://localhost:9000/api/v1/notifications/${userId}`,
   headers: {"id": userId}
 });
 return (dispatch) => {
   request.then((data) => {
     dispatch({ type: FETCH_NOTIFICATIONS, payload: request })
   });
 };
};