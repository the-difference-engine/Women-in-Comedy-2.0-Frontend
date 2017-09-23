import axios from 'axios';
import { POST_USER_WALL, USER_WALL_INPUT_CHANGE, POSTED, EVENT_WALL_INPUT_CHANGE, UPDATE_USER_AS_SUPERUSER } from './types';

export const createPostOnUserWall =  ({ body, userId, authorId }, callback) => async dispatch => {
  await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/posts',
    data: { body, userId, authorId }
  });
  callback(userId);
  dispatch({ type: POSTED });

};

export const updateUserAsSuperuser = (values) => async dispatch => {
  await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/users/superupdate',
    data: ( values )
  });
  dispatch({ type: UPDATE_USER_AS_SUPERUSER })
};

export const userWallInputChange = value => dispatch => {
  dispatch({ type: USER_WALL_INPUT_CHANGE, payload: value });
};

export const eventWallInputChange = value => dispatch => {
  dispatch({ type: EVENT_WALL_INPUT_CHANGE, payload: value })
}


export const createPostOnEventWall = ({ body, eventId, authorId }, callback) => async dispatch => {
  await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/posts/event',
    data: { body, eventId, authorId }
  });
  callback(eventId);
  dispatch({ type: POSTED });
}
