import axios from 'axios';
import { FETCH_UPCOMING_EVENTS, FETCH_MY_UPCOMING_EVENTS, FETCH_EVENT_INFO, FETCH_HOST_PHOTO } from './types';

export const fetchUpcomingEvents = () => async dispatch => {
  const request = await axios(process.env.REACT_APP_API_URL_DEV + 'events');
  dispatch({ type: FETCH_UPCOMING_EVENTS, payload: request });
};

export const fetchMyUpcomingEvents = (userId) => async dispatch => {
  const request = await axios(`http://localhost:9000/api/v1/events/user/${userId}`);
  dispatch({ type: FETCH_MY_UPCOMING_EVENTS, payload: request });
}

export const fetchEventInfo = eventId => async dispatch => {
  const request = await axios(`http://localhost:9000/api/v1/events/${eventId}`);
  dispatch({ type: FETCH_EVENT_INFO, payload: request });
}

export const fetchHostPhoto = (userId) => async (dispatch) => {
  const response = await axios({
    method: 'get',
    url:'http://localhost:9000/api/v1/users/info',
    headers: {"id": userId},
  });
  debugger;
  return dispatch({ type: FETCH_HOST_PHOTO, payload: response.data.photo });
}

