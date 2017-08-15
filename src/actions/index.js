import axios from 'axios';
// export const CREATE_USER = 'create_user';
export const CREATE_SESSION = 'create_session';
export const FETCH_USER_INFO = 'fetch_user_info';
export const FETCH_USER_FEEDS = 'fetch_user_feeds';
export const FETCH_USER_CONNECTIONS = 'fetch_user_connections';

// export function createUser(data, callback) {
//   const request = axios.post('http://localhost:9000/api/v1/users', data)
//     .then(()=>callback());
//   console.log('request', request);
//   return {
//     type: CREATE_USER,
//     payload: request
//   };
// }

export const createSession = (email, password) => {
  const request = axios.post('http://localhost:9000/api/v1/sessions', { email, password });
  return {
    type: CREATE_SESSION,
    payload: request
  };
};

export const fetchUserInfo = (userId) => {
  console.log('fetchUserInfo');
  const request = axios({
    method: 'get',
    url: 'http://localhost:9000/api/v1/users/info',
    headers: {"id": userId}
  });
  return {
    type: FETCH_USER_INFO,
    payload: request
  }
};

export const fetchUserFeeds = (userId) => {
  const request = axios({
    method: 'get',
    url: 'http://localhost:9000/api/v1/users/feed',
    headers: {"id": userId}
  });
  return {
    type: FETCH_USER_FEEDS,
    payload: request
  }
};

export const fetchUserConnections = (userId) => {
  const request = axios({
    method: 'get',
    url: 'http://localhost:9000/api/v1/users/connections',
    headers: {"id": userId}
  });
  return {
    type: FETCH_USER_CONNECTIONS,
    payload: request
  }
};
