import axios from 'axios';
import { POST_USER_WALL, USER_WALL_INPUT_CHANGE, POSTED, EVENT_WALL_INPUT_CHANGE } from './types';

export const createPostOnUserWall =  ({ body, userId, authorId }, callback) => async dispatch => {
  await axios({
    method: 'post',
    url: process.env.APP_API_URL + 'posts',
    data: { body, userId, authorId }
  });
  callback(userId);
  dispatch({ type: POSTED });

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
    url: process.env.APP_API_URL + 'posts/event',
    data: { body, eventId, authorId }
  });
  callback(eventId);
  dispatch({ type: POSTED });
}
