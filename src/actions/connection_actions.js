import axios from 'axios';
import { FETCH_USER_CONNECTIONS } from './types';


export const fetchUserConnections = (userId) => {
 console.log('fetchUserconnection');
 const request = axios({
   method: 'get',
   url: 'http://localhost:9000/api/v1/users/connections',
   headers: {"id": userId}
 });
 return (dispatch) => {
   request.then((data) => {
     dispatch({ type: FETCH_USER_CONNECTIONS, payload: request })
   });
 };
};
