import React, {Component} from 'react';
import firebase from 'firebase';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './HomePage/HomePage';
import EventsPage from './EventsPage/EventsPage';
import ActivityPage from './ActivityPage/ActivityPage';
import EventsFeed from './EventsFeedPage/EventsFeed';
import LandingPage from './LandingPage/LandingPage';
import Feed from './FeedPage/FeedPage';
import ProfilePage from './ProfilesPage/ProfilePage';
import CreateEvents from './CreateEventsPage/CreateEvents';
import CreateAdmin from './AdminPage/CreateAdmin';
import UpdateEvent from './UpdateEventPage/UpdateEvent';
import EditPage from './EditPage/EditPage';
import DeletedUser from './ProfilesPage/DeletedUser';
import Notification from "./NotificationsPage/NotificationsPage";
import "./app.css";


class App extends Component {

  componentWillMount() {
    var config = {
      apiKey: "AIzaSyBErciM-iyLeO2x7c9Ly4G2JbQRbAadOnc",
      authDomain: "womenincomedy-cd5b5.firebaseapp.com",
      databaseURL: "https://womenincomedy-cd5b5.firebaseio.com",
      projectId: "womenincomedy-cd5b5",
      storageBucket: "gs://womenincomedy-cd5b5.appspot.com",
      messagingSenderId: "1001680813005"
    };
    firebase.initializeApp(config);
  }

  buildConfirmationPath() {
    return window.location.origin.replace('.herokuapp', '-api.herokuapp') + window.location.pathname
  }

  buildConfirmationQuerystring() {
    return window.location.search
  }

  render() {
    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>
            <Switch>
              <Route exact path='/' component={LandingPage}></Route>
              <Route path='/feed' component={Feed}></Route>
              <Route path='/newevent' component={CreateEvents}></Route>
              <Route path='/events' component={EventsPage}></Route>
              <Route path='/admins' component={CreateAdmin}></Route>   
              <Route path="/home" component={HomePage}></Route>
              <Route path='/activities' component={ActivityPage}></Route>
              <Route path='/eventsfeed/:id' component={EventsFeed}></Route>
              <Route path='/updateevent/:id' component={UpdateEvent}></Route>
              <Route exact path='/profile/:id' component={ProfilePage}></Route>
              <Route path='/profile/:id/edit' component={EditPage}></Route>
              <Route path='/message' component={DeletedUser}></Route>
              <Route path='/notifications' component={Notification}></Route>
              <Redirect
                from='/users/confirmation'
                to={{
                  pathname: this.buildConfirmationPath(),
                  search: this.buildConfirmationQuerystring(),
                }} />
            </Switch>
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    )
  }
}

export default App;
