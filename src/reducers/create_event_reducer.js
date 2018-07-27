import {
  EVENT_INPUT_CHANGE,
  CLEAR,
  LOAD,
  CREATE_EVENT_FAIL,
  CREATE_EVENT_SUCCESS
} from "../actions/types";

const INITIAL_STATE = {
  title: "",
  about: "",
  location: "",
  photo: null,
  time: "",
  date: "",
  error: "",
  loading: false,
  ticket_link: "",
  address: "",
  id: null,
  is_private: 'false'
};
export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case EVENT_INPUT_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CLEAR:
      return INITIAL_STATE;
    case LOAD:
      return { ...state, loading: true, error: "" };
    case CREATE_EVENT_SUCCESS:
      return { ...state, id: action.eventId };
    case CREATE_EVENT_FAIL:
      return { ...state, error: "All Fields Must Be Filled Out" };
    default:
      return state;
  }
};
