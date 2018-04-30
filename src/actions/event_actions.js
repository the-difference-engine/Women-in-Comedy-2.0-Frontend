import firebase from 'firebase'
import axios from 'axios'
import { CREATE_EVENT, EVENT_INPUT_CHANGE, CLEAR, LOAD, CREATE_EVENT_FAIL, ATTEND_EVENT, CREATE_EVENT_SUCCESS, UPDATE_EVENT_SUCCESS, UPDATE_EVENT_FAIL } from './types';

export const createEvent = (eventInfo, userId, callback) => async dispatch => {
    let { address, date, description, img, location, ticketLink, time, title } = eventInfo;
    if(validate(eventInfo)) {
      dispatch({ type: LOAD })
      const ext = img.name.slice(img.name.lastIndexOf('.'));
      const imageData = await firebase.storage().ref(`/events/${title}${ext}`).put(img);

      img = imageData.metadata.downloadURLs[0];
      const request = await axios({
        method: 'post',
        url: process.env.REACT_APP_API_URL_DEV + 'events',
        data: { userId, address, date, description, img, location, ticketLink, time, title }
      })

      dispatch({ type: CREATE_EVENT_SUCCESS, eventId: request.data });
  } else {
    dispatch({ type: CREATE_EVENT_FAIL });
  }
}

export const updateEvent = (eventInfo, userId, callback) => async dispatch => {
    let { address, date, description, img, location, ticketLink, time, title } = eventInfo;
    if(validate(eventInfo)) {
      dispatch({ type: LOAD })
      const ext = img.name.slice(img.name.lastIndexOf('.'));
      const imageData = await firebase.storage().ref(`/events/${title}${ext}`).put(img);

      img = imageData.metadata.downloadURLs[0];
      const request = await axios({
        method: 'post',
        url: process.env.REACT_APP_API_URL_DEV + 'events',
        data: { userId, address, date, description, img, location, ticketLink, time, title }
      })

      dispatch({ type: UPDATE_EVENT_SUCCESS, eventId: request.data });
  } else {
    dispatch({ type: UPDATE_EVENT_FAIL });
  }
};

const validate = eventInfo => {
  for (let key in eventInfo) {
    if(!eventInfo[key]) {
      return false;
    }
  }
  return true;
};

export const eventInputChange = ({ prop, value }) => {

  if (prop === 'time') {
    value = value.toLocaleTimeString();
  } else if (prop === 'date') {
    value = value.toLocaleDateString(['en-US'], {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  }
  return { type: EVENT_INPUT_CHANGE, payload: { prop, value } };
}

export const attendEvent = (data, eventId, callback) => async dispatch => {
  const { id, firstName, lastName } = data;

  await axios({
    method: 'post',
    url: process.env.REACT_APP_API_URL_DEV + 'guests',
    data: { userId: id, eventId, firstName, lastName }
  });
  callback(eventId)
}

export const unattendEvent = (guestId, eventId, callback) => async dispatch => {
  await axios({
    method: 'delete',
    url: process.env.REACT_APP_API_URL_DEV + `guests/${guestId}`
  });
  callback(eventId);
}
