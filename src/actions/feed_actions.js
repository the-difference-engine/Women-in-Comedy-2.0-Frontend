import { FETCH_USER_FEEDS, FETCH_POST_COMMENTS } from './types';
import axios from 'axios';

export const fetchUserFeeds = (userId) => {
 const request = axios({
   method: 'get',
   url: process.env.REACT_APP_API_ENDPOINT + 'users/feed',
   headers: {"id": userId}
 });
 return (dispatch) => {
   request.then((data) => {
     dispatch({ type: FETCH_USER_FEEDS, payload: request })
   });
 };
};

export const fetchPostComments = (postId) => {
  const request = axios({
    method: 'get',
    url: process.env.REACT_APP_API_ENDPOINT + 'feed/comments',
    headers: {"id": postId}
  });
  return (dispatch) => {
    request.then((data) => {
      dispatch({ type: FETCH_POST_COMMENTS, payload: request })
    });
  };
};