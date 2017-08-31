import axios from 'axios';
import { FETCH_USER_CONNECTIONS, CREATE_CONNECTION_REQUEST } from './types';


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

export const createConnectionRequest = ({sender_id, receiver_id}) => {
  const request = axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/users/connections',
    headers: { "id": sender_id },
    data: {
      sender_id, receiver_id
    }
  });
  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: CREATE_CONNECTION_REQUEST, payload: request })
    });
  }
}
