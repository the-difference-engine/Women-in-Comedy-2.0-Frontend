import axios from 'axios';

import {
    FETCH_USER_INVITES, 
FETCH_PENDING_USER_INVITES, 
CREATE_INVITE_REQUEST, 
FETCH_INVITE_STATUS, 
 ACCEPT_INVITE, 
} from '../types'


export const createInviteRequest = ({sender_id, receiver_id}) => async dispatch =>{
    const request = await axios({
      method: 'post',
      url: process.env.REACT_APP_API_URL_DEV + 'users/invites',
      headers: { "id": sender_id },
      data: {
        sender_id, receiver_id
      }
    });
    dispatch({ type: CREATE_INVITE_REQUEST, payload: request })
  
  }