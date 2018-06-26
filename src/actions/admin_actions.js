import axios from "axios";
import {
  SUSPEND_USER,
  UNSUSPEND_USER,
  DELETE_USER,
  EMAIL_USERS
} from "./types";

export const suspendUser = ({ id, suspended }) => async dispatch => {
  // eslint-disable-next-line
  const request = await axios({
    method: "post",
    url: process.env.REACT_APP_API_URL_DEV + "users/suspend",
    headers: { id: id }
  });
  dispatch({
    type: SUSPEND_USER,
    suspended: true
  });
};

export const unsuspendUser = ({ id, suspended }) => async dispatch => {
  // eslint-disable-next-line
  const request = await axios({
    method: "post",
    url: process.env.REACT_APP_API_URL_DEV + "users/unsuspend",
    headers: { id: id }
  });
  dispatch({
    type: UNSUSPEND_USER,
    suspended: false
  });
};

export const deleteUser = id => async dispatch => {
  // eslint-disable-next-line
  const request = await axios({
    method: "delete",
    url: process.env.REACT_APP_API_URL_DEV + `users/${id}`,
    headers: { id: id }
  });
  return {
    type: DELETE_USER,
    payload: id
  };
};

export const mailUsers = (email, subject) => async dispatch => {
  const request = await axios({
    method: "post",
    url: process.env.REACT_APP_API_URL_DEV + 'users/emails/mass_mail',
    data: {email, subject}
  });
  return {
    type: EMAIL_USERS
  };
};
