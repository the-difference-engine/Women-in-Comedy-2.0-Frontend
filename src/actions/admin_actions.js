import axios from 'axios';
import { SUSPEND_USER, UNSUSPEND_USER, DELETE_USER } from './types';

export const suspendUser = ({ id, suspended }) => async dispatch => {
  const request = await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/users/suspend',
    headers: { "id": id }
    });    
  dispatch({
    type: SUSPEND_USER,
    suspended: true
  })
}

export const unsuspendUser = ({ id, suspended }) => async dispatch => {
  const request = await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/users/unsuspend',
    headers: { "id": id }
    });
  dispatch({
    type: UNSUSPEND_USER,
    suspended: false
  })
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

