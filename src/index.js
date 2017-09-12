import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import promise from 'redux-promise';
import thunk from 'redux-thunk';
import registerServiceWorker from './registerServiceWorker';

import reducers from './reducers';
import HomePage from './HomePage/HomePage';
import EventsPage from './EventsPage/EventsPage';
import ActivityPage from './ActivityPage/ActivityPage';
import EventsFeed from './EventsFeedPage/EventsFeed';
import Form from './LoginPage/Form';
import Feed from './FeedPage/FeedPage';
import ProfilePage from './ProfilesPage/ProfilePage';
import CreateEvents from './CreateEventsPage/CreateEvents';

const store = createStore(reducers, {}, applyMiddleware(promise, thunk));

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path='/feed' component={Feed}></Route>
          <Route path='/newevent' component={CreateEvents}></Route>
          <Route path='/events' component={EventsPage}></Route>
          <Route path="/home" component={HomePage}></Route>
          <Route path='/activities' component={ActivityPage}></Route>
          <Route path='/eventsfeed' component={EventsFeed}></Route>
          <Route path='/profile/:id' component={ProfilePage}></Route>
          <Route path='/' component={Form}></Route>
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.getElementById('root'));
registerServiceWorker();
