import axios from 'axios';
import { FETCH_USER_INFO, FETCH_ALL_USERS, FILTER_USERS, EDIT_USER, SET_USER_LOGGED_IN} from './types';

export const fetchUserInfo = (userId) => {
 const request = axios({
   method: 'get',
   url: process.env.REACT_APP_API_ENDPOINT + '/users/info',
   headers: {"id": userId},
 });
 return (dispatch) => {
   request.then((data) => {
     dispatch({ type: FETCH_USER_INFO, payload: request})
   });
 };
};

export const fetchAllUsers = () => async dispatch => {
  const request = await axios(process.env.REACT_APP_API_ENDPOINT + '/users');
  dispatch({ type: FETCH_ALL_USERS, payload: request });
}

export const filterUsers = (item, nestedItem) => {
  return {
    type: FILTER_USERS,
    payload: {item, nestedItem}
  }
}

export const editUser = (boolean) => {
  return {
    type: EDIT_USER,
    isAdminEdit: boolean
  }
}

export const updateSettings = (userId, adminStatus) => {
  let switchAdmin;
    switchAdmin =  adminStatus == true ? false : true;

  const request = axios({
    method: 'patch',
    url: process.env.REACT_APP_API_ENDPOINT + `users/${userId}`,
    headers: {"id": userId },
    data: { "admin":  switchAdmin }
  });

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: EDIT_USER, payload: request})
    });
  };
 };

 export const updatePublicFigure = (userId, publicFigure) => {
 
  const request = axios({
    method: 'patch',
    url: process.env.REACT_APP_API_ENDPOINT + `users/${userId}`,
    headers: {"id": userId },
    data: { "public_figure":  !publicFigure }
  });

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: EDIT_USER, payload: request})
    });
  };
 };

export const setUserLoggedIn = (boolean, userId) => { ``
  return {
    type: SET_USER_LOGGED_IN,
    loggedIn: boolean,
    userId: userId
  }
}

