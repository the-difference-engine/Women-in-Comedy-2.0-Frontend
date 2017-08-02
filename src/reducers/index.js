import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import TestReducer from './test_reducer';
const rootReducer = combineReducers({
  test: TestReducer,
  form: formReducer
});

export default rootReducer;
