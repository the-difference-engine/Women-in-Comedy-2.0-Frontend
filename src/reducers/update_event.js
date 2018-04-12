import { EVENT_INPUT_CHANGE, CLEAR, LOAD, UPDATE_EVENT_FAIL, UPDATE_EVENT_SUCCESS, FETCH_EVENT_INFO } from '../actions/types';

const INITIAL_STATE = {
  title: '',
  description: '',
  location: '',
  img: null,
  time: '',
  date: '',
  error: '',
  loading: false,
  ticketLink: '',
  address: '',
  id: null,
  user_id: null
};
export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case FETCH_EVENT_INFO:
      return {...state, title: action.payload.data.info.title, user_id: action.payload.data.info.user_id, id: action.payload.data.info.id };
    case EVENT_INPUT_CHANGE:
      return { ...state, [action.payload.prop]: action.payload.value };
    case CLEAR:
      return INITIAL_STATE;
    case LOAD:
      return { ...state, loading: true, error: '' };
    case UPDATE_EVENT_SUCCESS:
      return { ...state, id: action.eventId };
    case UPDATE_EVENT_FAIL:
      return { ...state, error: 'update event failed'}
    default:
      return state;
  }
}
