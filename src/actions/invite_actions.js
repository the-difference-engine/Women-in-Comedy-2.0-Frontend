import axios from 'axios';

import {
    FETCH_USER_INVITES, 
FETCH_PENDING_USER_INVITES, 
CREATE_INVITE_REQUEST, 
FETCH_INVITE_STATUS, 
 ACCEPT_INVITE, 
} from './types'
//test
export const fetchUserInvites = (userId) => {
  const request = axios({
    method: 'get',
    url: process.env.APP_API_URL + 'invites',
    headers: {"id": userId}
  });
  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: FETCH_USER_INVITES, payload: request })
    });
  };
};

export const fetchPendingUserInvites = (userId) => {
  const request = axios({
    method: 'get',
    url: process.env.APP_API_URL + 'invites/pending_invites',
    headers: {"id": userId}
  });
  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: FETCH_PENDING_USER_INVITES, payload: request })
    });
  };
};

export const createInviteRequest = (sender_id, receiver_id, event_id) => async dispatch =>{
    const request = await axios({
      method: 'post',
      url: process.env.APP_API_URL + 'invites',
      headers: { "id": sender_id },
      data: {
        id: sender_id,
        sender_id: sender_id,
        receiver_id: receiver_id, 
        event_id: event_id
      }
    });
    dispatch({ type: CREATE_INVITE_REQUEST, payload: request });
  
}

export const fetchInviteStatus = ({sender_id, receiver_id}) => async dispatch => {
  const request = await axios({
    method: 'post',
    url: process.env.APP_API_URL + 'invites/status',
    data: {sender_id, receiver_id}
  });
  dispatch({ type: FETCH_INVITE_STATUS, payload: request });
}

export const acceptInvite = (userId, sender_id, callback) => async dispatch => {
  const request = await axios({
    method: 'post',
    url: process.env.APP_API_URL + 'invites/accept_invites',
    data: {sender_id, receiver_id: userId}
  });
  await callback(userId);
}

export const declineInvite = (userId, requestId, callback) => async dispatch => {
  const request = await axios({
    method: 'delete',
    url: process.env.APP_API_URL + `invites/${requestId}`
  });
  await callback(userId);
}