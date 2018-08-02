import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import UserFeedReducer from './feeds_reducer';
import UserInfoReducer from './user_reducer';
import UsersReducer from './users_info_reducer';
import ConnectionsReducer from './connections_reducer';
import ConnectionStatusReducer from './connection_status_reducer';
import ReceivedConnectionRequest from './received_connection_requests_reducer';
import CreateEventReducer from './create_event_reducer';
import myEventsReducer from './my_events_reducer';
import upcomingEventsReducer from './upcoming_events_reducer';
import selectedEventReducer from './selected_event_reducer';
import userWallPostReducer from './user_wall_post_reducer';
import eventWallPostReducer from './event_wall_post_reducer';
import allUsersReducer from './all_users_reducer';
import UpdateEventReducer from './update_event';
import adminReducer from './admin_reducer';
import notificationsReducer from './notifications_reducer';
import editUserReducer from './edit_user_reducer';
import setUserLoggedInReducer from './set_user_logged_in_reducer';
import InviteReducer from './invite_reducer';
import updateSettingsReducer from './reducer_update_settings';
import createCommentsReducer from './create_comments_reducer';
import commentsReducer from './comments_reducer';



const rootReducer = combineReducers({
  form: formReducer,
  userInfo: UserInfoReducer,
  userFeeds: UserFeedReducer,
  userConnections: ConnectionsReducer,
  userInvites: InviteReducer,
  usersInfo: UsersReducer,
  status: ConnectionStatusReducer,
  receivedConnectionRequest: ReceivedConnectionRequest,
  createEventForm: CreateEventReducer,
  myUpcomingEvents: myEventsReducer,
  upcomingEvents: upcomingEventsReducer,
  selectedEvent: selectedEventReducer,
  userWallPost: userWallPostReducer,
  eventWallPost: eventWallPostReducer,
  allUsers: allUsersReducer,
  updateEventForm: UpdateEventReducer,
  admin: adminReducer,
  notifications: notificationsReducer,
  adminEdit: editUserReducer,
  isUserLoggedIn: setUserLoggedInReducer,
  updateAdmin: updateSettingsReducer,
  commentBody: createCommentsReducer,
  comments: commentsReducer
});

export default rootReducer;
