import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import CreateSessionReducer from './create_session_reducer';
// import CreateUserReducer from './create_user_reducer';
const rootReducer = combineReducers({
  form: formReducer,
  session: CreateSessionReducer
});

export default rootReducer;
