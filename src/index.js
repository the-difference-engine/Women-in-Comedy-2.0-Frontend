import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise'
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import HomePage from './HomePage/HomePage';
import EventsPage from './EventsPage/EventsPage';
import ActivityPage from './ActivityPage/ActivityPage';
import EventsFeed from './EventsFeedPage/EventsFeed';
import Form from './LoginPage/Form';
import Feed from './FeedPage/FeedPage';
import { Modal } from './common/Modal';
import ProfilesPage from './ProfilesPage/ProfilesPage'

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/modal' component={Modal}></Route>
          <Route path='/feed' component={Feed}></Route>
          <Route path='/events' component={EventsPage}></Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path='/activities' component={ActivityPage}></Route>
          <Route path='/eventsfeed' component={EventsFeed}></Route>
          <Route path='/' component={Form}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
