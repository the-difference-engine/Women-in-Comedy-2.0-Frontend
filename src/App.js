import React, { Component } from "react";
import firebase from "firebase";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import HomePage from "./HomePage/HomePage";
import EventsPage from "./EventsPage/EventsPage";
import ActivityPage from "./ActivityPage/ActivityPage";
import EventsFeed from "./EventsFeedPage/EventsFeed";
import Form from "./LoginPage/Form";
import Feed from "./FeedPage/FeedPage";
import ProfilePage from "./ProfilesPage/ProfilePage";
import CreateEvents from "./CreateEventsPage/CreateEvents";
import UpdateEvent from "./UpdateEventPage/UpdateEvent";
import EditPage from "./EditPage/EditPage";

import DeletedUser from "./ProfilesPage/DeletedUser";
import ChatWidget from "./ChatWidget/ChatWidget";

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

  render() {

    return (
      <BrowserRouter>
        <MuiThemeProvider>
          <div>

            <Switch>
              <Route exact path="/" component={Form} />
              <Route path="/feed" component={Feed} />
              <Route path="/newevent" component={CreateEvents} />
              <Route path="/events" component={EventsPage} />
              <Route path="/home" component={HomePage} />
              <Route path="/activities" component={ActivityPage} />
              <Route path="/eventsfeed/:id" component={EventsFeed} />
              <Route path="/updateevent/:id" component={UpdateEvent} />
              <Route exact path="/profile/:id" component={ProfilePage} />
              <Route path="/profile/:id/edit" component={EditPage} />
              <Route path="/message" component={DeletedUser} />
              <Route path="/profile/:id" component={ProfilePage} />
            </Switch>
            <ChatWidget />
          </div>
        </MuiThemeProvider>
      </BrowserRouter>
    );
  }
}

export default App;
