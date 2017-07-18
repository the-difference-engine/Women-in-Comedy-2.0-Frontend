import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import registerServiceWorker from './registerServiceWorker';

import EventsPage from './EventsPage/EventsPage';
import ActivityPage from './ActivityPage/ActivityPage';
import HomePage from './HomePage/HomePage';

ReactDOM.render(
  <BrowserRouter>
    <div>
      <Switch>
        <Route path="/events" component={EventsPage}></Route>
        <Route path="/home" component={HomePage}></Route>
        <Route path="/activities" component={ActivityPage}></Route>
       </Switch>
    </div>
  </BrowserRouter>
  , document.getElementById('root'));
registerServiceWorker(); 
