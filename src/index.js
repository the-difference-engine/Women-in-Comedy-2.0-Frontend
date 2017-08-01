import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import EventsPage from './EventsPage/EventsPage';
import ActivityPage from './ActivityPage/ActivityPage';
import EventsFeed from './EventsFeedPage/EventsFeed';
import Form from './Login|Signup/Form';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/events' component={EventsPage}></Route>
          <Route path='/activities' component={ActivityPage}></Route>
          <Route path='/eventsfeed' component={EventsFeed}></Route>
          <Route path='/form' component={Form}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
