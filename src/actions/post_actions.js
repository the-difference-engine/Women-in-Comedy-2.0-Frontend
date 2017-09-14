import axios from 'axios';
import { POST_USER_WALL, USER_WALL_INPUT_CHANGE, POSTED } from './types';

export const createPostOnUserWall =  ({ body, userId, authorId }, callback) => async dispatch => {
  await axios({
    method: 'post',
    url: 'http://localhost:9000/api/v1/posts',
    data: { body, userId, authorId }
  });
  callback(userId);
  dispatch({ type: POSTED });

};

export const userWallInputChange = value => dispatch => {
  dispatch({ type: USER_WALL_INPUT_CHANGE, payload: value });
};
