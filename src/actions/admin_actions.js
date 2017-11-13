import axios from 'axios';
import { SUSPEND_USER, UNSUSPEND_USER, DELETE_USER } from './types';

export const suspendUser = (suspended) => async dispatch => {
  const request = await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/users/suspend',
    });
  return {
    type: SUSPEND_USER,
    suspended,
    // console.log(action.suspended);
  }
}

export const unsuspendUser = (suspended) => async dispatch => {
  const request = await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/users/unsuspend',
    });
  return {
    type: UNSUSPEND_USER,
    suspended: suspended
  }
}

export const deleteUser = (id) => async dispatch => {
  const request = await axios({
    method: 'delete',
    url: `http://localhost:9000/api/v1/users/${id}`,
    headers: {"id": id}
    });
  return {
    type: DELETE_USER,
    payload: id
  }
}

