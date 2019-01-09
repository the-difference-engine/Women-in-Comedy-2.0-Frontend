import axios from 'axios';
import { FETCH_USER_INFO, FETCH_ALL_USERS, FILTER_USERS, EDIT_USER, SET_USER_LOGGED_IN, UPDATE_ADMIN_STATUS, UPDATE_PUBLIC_FIGURE_STATUS, UPDATE_IS_MENTOR_STATUS } from './types';

export const fetchUserInfo = (userId) => {
 const request = axios({
   method: 'get',
   url: process.env.REACT_APP_API_ENDPOINT + 'users/info',
   headers: {"id": userId},
 });
 return (dispatch) => {
   request.then((data) => {
     dispatch({ type: FETCH_USER_INFO, payload: request})
   });
 };
};

export const fetchAllUsers = () => async dispatch => {
  const request = await axios(process.env.REACT_APP_API_ENDPOINT + 'users');
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

// super User will be created 
export const updateToSuperAdmin = (userId, callback) => {
  
  const request = axios({
    method: 'patch',
    url: process.env.REACT_APP_API_ENDPOINT + `users/${userId}`,
    headers: {"id": userId },
    data: { "SuperAdmin":  true, "admin": true }
  });

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: EDIT_USER, payload: request});
      callback();
    });
  };
}

// super User Status will be removed by other super users 
export const removeSuperAdminStatus = (userId, callback) => {
  
  const request = axios({
    method: 'patch',
    url: process.env.REACT_APP_API_ENDPOINT + `users/${userId}`,
    headers: {"id": userId },
    data: { "superadmin":  false}
  });

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: EDIT_USER, payload: request});
      callback();
    });
  };
}

export const updateSettings = (userId, adminStatus, callback) => {
  let switchAdmin;
    adminStatus == true ? switchAdmin = false : switchAdmin = true;

  const request = axios({
    method: 'patch',
    url: process.env.REACT_APP_API_ENDPOINT + `users/${userId}`,
    headers: {"id": userId },
    data: { "admin": !adminStatus }
  });

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: UPDATE_ADMIN_STATUS, payload: request})
      callback();
    });
  };
};

export const updatePublicFigure = (userId, publicFigure, callback) => {
 
  const request = axios({
    method: 'patch',
    url: process.env.REACT_APP_API_ENDPOINT + `users/${userId}`,
    headers: {"id": userId },
    data: { "public_figure":  !publicFigure }
  });

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: UPDATE_PUBLIC_FIGURE_STATUS, payload: request});
      callback();
    });
  };
};

export const updateIsMentor = (userId, isMentor, callback) => {
 
  const request = axios({
    method: 'patch',
    url: process.env.REACT_APP_API_ENDPOINT + `users/${userId}`,
    headers: {"id": userId },
    data: { "is_mentor":  !isMentor }
  });

  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: UPDATE_IS_MENTOR_STATUS, payload: request});
      callback();
    });
  };
};

export const setUserLoggedIn = (boolean, userId) => {
  return {
    type: SET_USER_LOGGED_IN,
    loggedIn: boolean,
    userId: userId
  }
}

