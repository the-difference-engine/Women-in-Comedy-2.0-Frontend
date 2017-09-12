import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import UserFeedReducer from './feeds_reducer';
import UserConnectionsReducer from './connections_reducer';
import UserInfoReducer from './user_reducer';
import FeedReducer from './feeds_reducer';
import ConnectionsReducer from './connections_reducer';
import ConnectionStatusReducer from './connection_status_reducer';
import ReceivedConnectionRequest from './received_connection_requests_reducer';

const rootReducer = combineReducers({
  form: formReducer,
  userInfo: UserInfoReducer,
  userFeeds: UserFeedReducer,
  userConnections: UserConnectionsReducer,
  userConnections: ConnectionsReducer,
  status: ConnectionStatusReducer,
  receivedConnectionRequest: ReceivedConnectionRequest
});

export default rootReducer;
