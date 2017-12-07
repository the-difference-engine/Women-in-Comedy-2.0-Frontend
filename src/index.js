import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import reducers from './reducers';
import 'dotenv/config';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(promise, thunk))
);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
