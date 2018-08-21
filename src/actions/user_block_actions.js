import axios from "axios";
import {
  FETCH_BLOCKED_USERS,
  CREATE_BLOCK,
  FETCH_USER_CONNECTIONS
} from "./types";

export const fetchBlockedUsers = userId => async dispatch => {
  const request = await axios({
    method: "get",
    url: process.env.REACT_APP_API_ENDPOINT + "users/blocked",
    headers: { id: userId }
  });
  dispatch({ type: FETCH_BLOCKED_USERS, payload: request });
};

export const createBlock = (blocker_id, blocked_id) => async dispatch => {
  const request = await axios({
    method: "post",
    url: process.env.REACT_APP_API_ENDPOINT + `users/blocks/${blocker_id}`,
    headers: { id: blocker_id },
    data: {
      blocker_id,
      blocked_id
    }
  });
  dispatch({
    type: CREATE_BLOCK
  });
};
