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
  switch (action.type) {
    case FETCH_EVENT_INFO:
    console.log(action.payload.data.info);
      return {
        ...state,
        title: action.payload.data.info.title,
        about: action.payload.data.info.about,
        location: action.payload.data.info.location,
        photo: action.payload.data.info.photo,
        time: action.payload.data.info.time,
        date: action.payload.data.info.date,
        ticket_link: action.payload.data.info.ticket_link,
        address: action.payload.data.info.address,
        id: action.payload.data.info.id,
        user_id: action.payload.data.info.user_id,
      };
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
