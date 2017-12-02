import axios from 'axios';

import { FETCH_NOTIFICATIONS } from './types';

export const fetchNotifications = (userId) => {
  const request = axios({
   method: 'get',
   url: process.env.REACT_APP_API_URL_DEV + `/notifications/${userId}`,
   headers: { "id": userId}
 });
 return (dispatch) => {
   request.then((data) => {
     dispatch({ type: FETCH_NOTIFICATIONS, payload: request })
   });
 };
};

// export const fetchNotifications = (userId) => async dispatch => {
//   const request = await axios(process.env.REACT_APP_API_URL_DEV + `/notifications/${userId}`);
//   dispatch({ type: FETCH_NOTIFICATIONS, payload: request });
// }

