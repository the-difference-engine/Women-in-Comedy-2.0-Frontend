import axios from 'axios';
import { FETCH_USER_INFO, FETCH_ALL_USERS, FILTER_USERS, EDIT_USER, SET_USER_LOGGED_IN} from './types';

//try users this url to hit a specific user in updateSettings
export const fetchUserInfo = (userId) => {
 const request = axios({
   method: 'get',
   url: process.env.REACT_APP_API_URL_DEV + '/users/info',
   headers: {"id": userId},
 });
 return (dispatch) => {
   request.then((data) => {
    //  console.log("********")
    //  console.log(data)
     dispatch({ type: FETCH_USER_INFO, payload: request})
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

export const editUser = (boolean) => {
  return {
    type: EDIT_USER,
    isAdminEdit: boolean
  }
}

export const updateSettings = (id, item) => {
  console.log(id)
  return dispatch => {
    console.log(item)
    return axios.put(process.env.REACT_APP_API_URL_DEV + `users/${id}`, item).then(response => {
        console.log(response.data)
    })
  }
}

export const setUserLoggedIn = (boolean, userId) => {
  return {
    type: SET_USER_LOGGED_IN,
    loggedIn: boolean,
    userId: userId
  }
}
//Testing:
//CONSOLE LOG OUT INFO on fetchUser
export const activeUser = (user) => {
  return {
    type: FETCH_USER_INFO,
    payload: user
  }
}