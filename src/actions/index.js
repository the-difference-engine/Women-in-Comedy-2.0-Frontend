import axios from 'axios';
// export const CREATE_USER = 'create_user';
export const CREATE_SESSION = 'create_session';
export const FETCH_USER_INFO = 'fetch_user_info';
export const FETCH_USER_FEEDS = 'fetch_user_feeds';
export const FETCH_USER_CONNECTIONS = 'fetch_user_connections';

//https://qa-womenincomedy.herokuapp.com


 export const fetchUserInfo = (userId) => {
  console.log('fetchUserInfo');
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

export const fetchUserFeeds = (userId) => {
  console.log('fetchUserFeeds');
  const request = axios({
    method: 'get',
    url: 'http://localhost:9000/api/v1/users/feed',
    headers: {"id": userId}
  });
  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: FETCH_USER_FEEDS, payload: request })
    });
  };
};

 export const fetchUserConnections = (userId) => {
  console.log('fetchUserconnection');
  const request = axios({
    method: 'get',
    url: 'http://localhost:9000/api/v1/users/connections',
    headers: {"id": userId}
  });
  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: FETCH_USER_CONNECTIONS, payload: request })
    });
  };
};
