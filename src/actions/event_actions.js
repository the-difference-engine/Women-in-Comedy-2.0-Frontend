import firebase from 'firebase'
import axios from 'axios'
import { CREATE_EVENT, EVENT_INPUT_CHANGE, CLEAR, LOAD, CREATE_EVENT_FAIL, ATTEND_EVENT } from './types';

<<<<<<< HEAD
export function createEvent(data){
  console.log('createEvent', data);
  return async (dispatch) => {
    try {
      await axios.post('http://localhost:9000/api/v1/users/user_events', { 
        user_id: data.userId,
        title: data.title,
        photo: data.photo,
        date: data.date,
        time: data.time,
        ticket_link: data.ticketLink,
        location: data.location,
        about: data.about
=======
export const createEvent = (eventInfo, userId, callback) => async dispatch => {
    let { address, date, description, img, location, ticketLink, time, title } = eventInfo;
    if(validate(eventInfo)) {
      dispatch({ type: LOAD })
      const ext = img.name.slice(img.name.lastIndexOf('.'));
      const imageData = await firebase.storage().ref(`/events/${title}${ext}`).put(img);

      img = imageData.metadata.downloadURLs[0];
      const request = await axios({
        method: 'post',
        url: 'http://localhost:9000/api/v1/events',
        data: { userId, address, date, description, img, location, ticketLink, time, title }
>>>>>>> fdc2576c5d6c93af6751f28fe873a2b38f9b0803
      })
      console.log(request.data);
      callback();
      dispatch({ type: CLEAR });
  } else {
    dispatch({ type: CREATE_EVENT_FAIL });
  }
}

const validate = eventInfo => {
  for (let key in eventInfo) {
    if(!eventInfo[key]) {
      return false;
    }
  }
<<<<<<< HEAD
// export const createEvent = (data) => {
//   console.log('createEvent', data);
//   return {
//     type: CREATE_EVENT,
//     payload: data
//   };
=======
  return true;
>>>>>>> fdc2576c5d6c93af6751f28fe873a2b38f9b0803
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
    url: 'http://localhost:9000/api/v1/guests',
    data: { userId: id, eventId, firstName, lastName }
  });
  callback(eventId)
}

export const unattendEvent = (guestId, eventId, callback) => async dispatch => {
  console.log(guestId);
  console.log(eventId);
  await axios({
    method: 'delete',
    url: `http://localhost:9000/api/v1/guests/${guestId}`
  });
  callback(eventId);
}
