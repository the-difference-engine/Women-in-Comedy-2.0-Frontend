import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserInfoReducer from './user_reducer';
import FeedReducer from './feeds_reducer';
import ConnectionsReducer from './connections_reducer';
import EventsReducer from './events_reducer';
import ConnectionStatusReducer from './connection_status_reducer';
// import CreateUserReducer from './create_user_reducer';
const rootReducer = combineReducers({
  form: formReducer,
  userInfo: UserInfoReducer,
  userFeeds: FeedReducer,
  userConnections: ConnectionsReducer,
  events: EventsReducer,
  status: ConnectionStatusReducer
});

export default rootReducer;
