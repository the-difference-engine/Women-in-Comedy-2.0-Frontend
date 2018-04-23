import axios from 'axios';
import { FETCH_USER_INFO, FETCH_ALL_USERS, FILTER_USERS, EDIT_USER, SET_USER_LOGGED_IN} from './types';

//try users this url to hit a specific user in updateSettings
//REMEMBER NEW UPDATESETTINGS REDUCER 
export const fetchUserInfo = (userId) => {
 const request = axios({
   method: 'get',
   url: process.env.REACT_APP_API_URL_DEV + '/users/info',
   headers: {"id": userId},
 });
 return (dispatch) => {
   request.then((data) => {
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

//TRY THIS AGAIN WITH THE RIGHT ENDPOINT NOW ENETEREd
// export const updateSettings = (id, item) => {
//   console.log(id)
//   return dispatch => {
//     console.log(item)
//     return axios.put(process.env.REACT_APP_API_URL_DEV + `users/connections/${id}`, item).then(response => {
//         console.log(response.data)
//     })
//   }
// }

export const updateSettings = (userId) => {

  const request = axios({
    method: 'patch',
    url: process.env.REACT_APP_API_URL_DEV + `users/${userId}`,
    headers: {"id": userId, admin: 'trueboss'},
  });

  return (dispatch) => {
    request.then((data) => {

      dispatch({ type: EDIT_USER, payload: request})
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

// export const updateSettings = () => {
//   const idea = {
//     title: this.state.title,
//     body: this.state.body
//   }

//   axios.put({
//     method: 'patch',
//     url: process.env.REACT_APP_API_URL_DEV + `users/connections/${userId}`,
//     headers: {"id": userId, admin: 'trueboss'},
//   }).then(response => console.log(response))

 
// }