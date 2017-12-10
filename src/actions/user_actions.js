import axios from 'axios';
import { FETCH_USER_INFO, FETCH_ALL_USERS, FILTER_USERS, EDIT_USER, IS_USER_LOGIN} from './types';

export const fetchUserInfo = (userId) => {
 const request = axios({
   method: 'get',
   url: process.env.REACT_APP_API_URL_DEV + '/users/info',
   headers: {"id": userId}
 });
 return (dispatch) => {
   request.then((data) => {
     dispatch({ type: FETCH_USER_INFO, payload: request })
   });
 };
};

export const fetchAllUsers = () => async dispatch => {
  const request = await axios(process.env.REACT_APP_API_URL_DEV + 'users');
  dispatch({ type: FETCH_ALL_USERS, payload: request });
}

export const filterUsers = (item, nestedItem) => {
  return {
    type: FILTER_USERS,
    payload: {item, nestedItem}
  }
}

export const editUser = (isAdmin) => {
  return {
    type: EDIT_USER,
    isAdminEdit: isAdmin
  }
}

export const isUserLoggedIn = (boolean) => {
  return {
    type: IS_USER_LOGIN,
    isUserLoggedIn: boolean
  }
}
