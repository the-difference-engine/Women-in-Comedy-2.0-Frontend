import axios from 'axios';
import { FETCH_USER_INFO, FETCH_ALL_USERS, FILTER_USERS, EDIT_USER } from './types';

export const fetchUserInfo = (userId) => {
 const request = axios({
   method: 'get',
   url: 'http://localhost:9000/api/v1/users/info',
   headers: {"id": userId}
 });
 return (dispatch) => {
   request.then((data) => {
     dispatch({ type: FETCH_USER_INFO, payload: request })
   });
 };
};

export const fetchAllUsers = () => async dispatch => {
  const request = await axios('http://localhost:9000/api/v1/users');
  dispatch({ type: FETCH_ALL_USERS, payload: request });
}

export const filterUsers = (item, nestedItem) => {
  return {
    type: FILTER_USERS,
    payload: {item, nestedItem}
  }
}

export const editUser = (isAdmin) => {
  console.log('editUser function is initialized.');
  return {
    type: EDIT_USER,
    isAdminEdit: isAdmin
  }
}
