import axios from 'axios';

// export const CREATE_USER = 'create_user';
export const CREATE_SESSION = 'create_session';

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
