import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import reducers from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const store = createStore(
  reducers,
  {},
  composeWithDevTools(applyMiddleware(promise, thunk)),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
