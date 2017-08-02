import axios from 'axios';

export const CREATE_USER = 'create_user';

export function createUser(data) {
  const request = axios.post('http://localhost:9000/api/v1/users',data)
  return {
    type: CREATE_USER,
    payload: request
  };
}
