import axios from 'axios';
import { FETCH_MEETING_OPTIONS } from "./types";

export const fetchMeetingOptions = () => {
  const request = axios({
    method: 'get',
    url: process.env.REACT_APP_API_ENDPOINT + 'meet_options'
  });

  return (dispatch) => {
    request.then((response) => {
      dispatch({ type: FETCH_MEETING_OPTIONS, payload: response })
    });
  };
};
