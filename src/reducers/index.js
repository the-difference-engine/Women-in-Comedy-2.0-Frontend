import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
<<<<<<< HEAD
import UserInfoReducer from './user_reducer';
import UserFeedReducer from './feeds_reducer';
import UserConnectionsReducer from './connections_reducer';
import UsersInfoReducer from './users_info_reducer';

import FeedReducer from './feeds_reducer';
=======

import UserFeedReducer from './feeds_reducer';
import UserConnectionsReducer from './connections_reducer';
import UserInfoReducer from './user_reducer';
>>>>>>> fdc2576c5d6c93af6751f28fe873a2b38f9b0803
import ConnectionsReducer from './connections_reducer';
import ConnectionStatusReducer from './connection_status_reducer';
<<<<<<< HEAD
import CreatePostReducer from './create_post_reducer';

// import CreateUserReducer from './create_user_reducer';
=======
import ReceivedConnectionRequest from './received_connection_requests_reducer';
import CreateEventReducer from './create_event_reducer';
import myEventsReducer from './my_events_reducer';
import upcomingEventsReducer from './upcoming_events_reducer';
import selectedEventReducer from './selected_event_reducer';
import userWallPostReducer from './user_wall_post_reducer';
import eventWallPostReducer from './event_wall_post_reducer';

>>>>>>> fdc2576c5d6c93af6751f28fe873a2b38f9b0803
const rootReducer = combineReducers({
  form: formReducer,
  userInfo: UserInfoReducer,
  userFeeds: UserFeedReducer,
<<<<<<< HEAD
  userConnections: UserConnectionsReducer,
  usersInfo: UsersInfoReducer,
  userEvents: EventsReducer,
  userFeeds: FeedReducer,
  userConnections: ConnectionsReducer,
  pendingUserConnections: ConnectionStatusReducer,
  events: EventsReducer,
  status: ConnectionStatusReducer,
  createPost: CreatePostReducer
=======
  userConnections: ConnectionsReducer,
  status: ConnectionStatusReducer,
  receivedConnectionRequest: ReceivedConnectionRequest,
  createEventForm: CreateEventReducer,
  myUpcomingEvents: myEventsReducer,
  upcomingEvents: upcomingEventsReducer,
  selectedEvent: selectedEventReducer,
  userWallPost: userWallPostReducer,
  eventWallPost: eventWallPostReducer
>>>>>>> fdc2576c5d6c93af6751f28fe873a2b38f9b0803
});

export default rootReducer;
