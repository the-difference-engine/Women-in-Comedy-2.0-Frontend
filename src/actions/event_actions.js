import firebase from "firebase";
import axios from "axios";
import {
  CREATE_EVENT,
  EVENT_INPUT_CHANGE,
  CLEAR,
  LOAD,
  CREATE_EVENT_FAIL,
  ATTEND_EVENT,
  CREATE_EVENT_SUCCESS,
  UPDATE_EVENT_SUCCESS,
  UPDATE_EVENT_FAIL
} from "./types";

export const createEvent = (eventInfo, userId, callback) => async dispatch => {
  let {
    address,
    date,
    about,
    photo,
    location,
    ticket_link,
    time,
    title
  } = eventInfo;

  if (validate(eventInfo)) {
    dispatch({ type: LOAD });
    // set events to the photo name.
    // this is an update to fix the update action
    const photoName = photo.name.slice(0, photo.name.lastIndexOf("."));
    const ext = photo.name.slice(photo.name.lastIndexOf("."));
    const imageData = await firebase
      .storage()
      .ref(`/events/${photoName}${ext}`)
      .put(photo);

    photo = imageData.metadata.downloadURLs[0];
    const request = await axios({
      method: "post",
      url: process.env.REACT_APP_API_URL_DEV + "events",
      data: {
        userId,
        address,
        date,
        about,
        photo,
        location,
        ticket_link,
        time,
        title
      }
    });

    dispatch({ type: CREATE_EVENT_SUCCESS, eventId: request.data });
  } else {
    dispatch({ type: CREATE_EVENT_FAIL });
  }
};

export const updateEvent = (eventInfo, userId, callback) => async dispatch => {
  let {
    address,
    date,
    about,
    photo,
    location,
    ticket_link,
    time,
    title,
    id
  } = eventInfo;

  let photoTitle = eventInfo.photo.toString();

  if (photoTitle.includes("firebase")) {
    const request = await axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL_DEV}events/${id}`,
      data: {
        userId,
        address,
        date,
        about,
        photo,
        location,
        ticket_link,
        time,
        title
      }
    });

    dispatch({ type: UPDATE_EVENT_SUCCESS, eventId: request.data });
  }
  // otherwise make the changes to the new photo uploaded.
  else if (validate(eventInfo)) {
    dispatch({ type: LOAD });
    // saving the photo name instead of the event name to fix updating error
    // might be able to remove the ext completely
    const photoName = photo.name.slice(0, photo.name.lastIndexOf("."));
    const ext = photo.name.slice(photo.name.lastIndexOf("."));
    const imageData = await firebase
      .storage()
      .ref(`/events/${photoName}${ext}`)
      .put(photo);

    photo = imageData.metadata.downloadURLs[0];
    const request = await axios({
      method: "put",
      url: `${process.env.REACT_APP_API_URL_DEV}events/${id}`,
      data: {
        userId,
        address,
        date,
        about,
        photo,
        location,
        ticket_link,
        time,
        title
      }
    });

    dispatch({ type: UPDATE_EVENT_SUCCESS, eventId: request.data });
  } else {
    dispatch({ type: UPDATE_EVENT_FAIL });
  }
};

const validate = eventInfo => {
  for (let key in eventInfo) {
    if (!eventInfo[key]) {
      return false;
    }
  }
  return true;
};

export const eventInputChange = ({ prop, value }) => {
  if (prop === "time") {
    value = value.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit"
    });
  } else if (prop === "date") {
    value = value.toLocaleDateString(["en-US"], {
      month: "short",
      day: "numeric",
      year: "numeric"
    });
  }
  return { type: EVENT_INPUT_CHANGE, payload: { prop, value } };
};

export const attendEvent = (data, eventId, callback) => async dispatch => {
  const { id, firstName, lastName } = data;

  await axios({
    method: "post",
    url: process.env.REACT_APP_API_URL_DEV + "guests",
    data: { userId: id, eventId, firstName, lastName }
  });
  callback(eventId);
};

export const unattendEvent = (guestId, eventId, callback) => async dispatch => {
  await axios({
    method: "delete",
    url: process.env.REACT_APP_API_URL_DEV + `guests/${guestId}`
  });
  callback(eventId);
};
