import { EVENT_INPUT_CHANGE, CLEAR, LOAD, UPDATE_EVENT_FAIL, UPDATE_EVENT_SUCCESS, FETCH_EVENT_INFO } from '../actions/types';

const INITIAL_STATE = {
  title: '',
  about: '',
  location: '',
  photo: null,
  time: '',
  date: '',
  error: '',
  loading: false,
  ticket_link: '',
  address: '',
  id: null,
  user_id: null
};
export default (state = INITIAL_STATE, action) => {
  console.log("update event action.type")
  switch (action.type) {
    case FETCH_EVENT_INFO:
      return  action.payload.data.info;
    case EVENT_INPUT_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CLEAR:
      return INITIAL_STATE;
    case LOAD:
      return { ...state, loading: true, error: '' };
    case UPDATE_EVENT_SUCCESS:
      return { ...state, id: action.eventId };
    case UPDATE_EVENT_FAIL:
      return { ...state, error: 'update event failed' }
    default:
      return state;
  }
}
