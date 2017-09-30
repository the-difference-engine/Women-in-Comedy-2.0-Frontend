import axios from 'axios';

import {
  FETCH_USER_CONNECTIONS,
  CREATE_CONNECTION_REQUEST,
  FETCH_CONNECTION_STATUS,
  FETCH_PENDING_USER_CONNECTIONS,
  ACCEPT_CONNECTION
} from './types';


export const fetchUserConnections = (userId) => {

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


export const createConnectionRequest = ({sender_id, receiver_id}) => async dispatch =>{
  const request = await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/users/connections',
    headers: { "id": sender_id },
    data: {
      sender_id, receiver_id
    }
  });
  dispatch({ type: CREATE_CONNECTION_REQUEST, payload: request })

}

export const fetchConnectionStatus = ({ sender_id, receiver_id }) => async dispatch => {

  const request = await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/users/connection/status',
    data: { sender_id, receiver_id }
  });
  dispatch({ type: FETCH_CONNECTION_STATUS, payload: request });

}

export const fetchPendingUserConnections = (userId) => {

  const request = axios({
    method: 'get',
    url: 'http://localhost:9000/api/v1/users/pending_connections',
    headers: { "id": userId}
  });
  return(dispatch) => {
    request.then((data) => {
      dispatch({type: FETCH_PENDING_USER_CONNECTIONS, payload: request})
    });
  };
};

export const acceptConnection = (userId, sender_id, callback, callback2) => async dispatch => {

  const request = await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/users/accept_connections',
    data: { sender_id, receiver_id: userId }
  });
  await callback(userId);
  await callback2(userId);
};



export const declineConnection = (userId, requestId, callback) => async dispatch => {
  const request = await axios({
    method: 'delete',
    url: `http://localhost:9000/api/v1/users/connections/${requestId}`
  });
  await callback(userId)
}

export const blockConnectionRequests = (sender_id) => async dispatch =>{
  const request = await axios({
    method: 'post',
    url: `http://localhost:9000/api/v1/users/${sender_id}`,
    headers: { "id": sender_id }
  });
}