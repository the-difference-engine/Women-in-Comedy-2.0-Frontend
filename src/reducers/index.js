import { combineReducers } from 'redux';
import TestReducer from './test_reducer';
const rootReducer = combineReducers({
  test: TestReducer
});

export default rootReducer;
