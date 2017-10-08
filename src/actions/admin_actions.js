import axios from 'axios';
import { SUSPEND_USER } from './types';

export const suspendUser = (userId) => async dispatch => {
  const request = await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/users/suspend',
    headers: {"id": userId}
  });
  console.log(request); 
}