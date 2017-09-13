import firebase from 'firebase'
import axios from 'axios'
import { CREATE_EVENT, EVENT_INPUT_CHANGE, CLEAR, LOAD, CREATE_EVENT_FAIL } from './types';

export const createEvent = (eventInfo, userId) => async dispatch => {
    console.log('createEvent', eventInfo);
    console.log(userId);
    let { address, date, description, img, location, ticketLink, time, title } = eventInfo;
    if(validate(eventInfo)) {
      dispatch({ type: LOAD })
      const ext = img.name.slice(img.name.lastIndexOf('.'));
      console.log(ext);
      const imageData = await firebase.storage().ref(`/events/${title}${ext}`).put(img);
      console.log(imageData);
      img = imageData.metadata.downloadURLs[0];
      const request = await axios({
        method: 'post',
        url: 'http://localhost:9000/api/v1/events',
        data: { userId, address, date, description, img, location, ticketLink, time, title }
      })
      console.log(request.data);
      // callback();
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
