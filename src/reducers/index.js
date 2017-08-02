import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TestReducer from './test_reducer';
import CreateUserReducer from './create_user_reducer';
const rootReducer = combineReducers({
  test: TestReducer,
  form: formReducer,
  user: CreateUserReducer
});

export default rootReducer;
