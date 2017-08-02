import { CREATE_USER } from '../actions';

export default function (state = {}, action) {
  switch (action.type) {
  case CREATE_USER:
    return action.payload.data;
  default:
    return state;
  }
}
