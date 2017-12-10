import React, {Component} from 'react';
import firebase from 'firebase';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import HomePage from './HomePage/HomePage';
import EventsPage from './EventsPage/EventsPage';
import ActivityPage from './ActivityPage/ActivityPage';
import EventsFeed from './EventsFeedPage/EventsFeed';
import Form from './LoginPage/Form';
import Feed from './FeedPage/FeedPage';
import ProfilePage from './ProfilesPage/ProfilePage';
import CreateEvents from './CreateEventsPage/CreateEvents';
import EditPage from './EditPage/EditPage';
import {Widget, addResponseMessage, handleNewUserMessage} from 'react-chat-widget';
import logo from './images/Women.png';
import Cable from 'actioncable';
import LoginModal from './common/LoginModal';

class App extends Component {

  //User types in new message in chat box
  handleNewUserMessage = (newMessage) => {
    // Now send the message to the backend API
    this.chats.create(newMessage);
    //Update the state of current message
    this.state.currentMessage = newMessage;
  }
  componentDidMount() {
    //Add welcome message at the beginning
    addResponseMessage("Welcome to this awesome chat!");
  }

  getResponseMessage(message) {
    //Make sure not to display own message in chat logs
    if (this.state.currentMessage === message) {

      //Reset the current message to null and return empty string
      this.state.currentMessage = '';
      return '';
    } else {
      //If it's not an own message, add to the chat log
      addResponseMessage(message);

      //Reset the current message to null
      this.state.currentMessage = '';

    }
  }

  componentWillMount() {
    //Create a Socket Connection for chat function
    this.createSocket();
    this.setState({currentMessage: ''});
    this.setState({userLoggedIn: false});

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

  //Prepare the Action Cable socket for chat function
  createSocket() {
    let cable = Cable.createConsumer('ws://localhost:9000/cable');

    //Create chat function
    this.chats = cable.subscriptions.create({
      channel: 'ChatChannel'
    }, {
      connected: () => {},
      received: (data) => {
        this.getResponseMessage(data.content);
      },
      create: function(chatContent) {
        this.perform('create', {content: chatContent});
      }
    });
  }

  renderChatWidget() {

    //Obtain user id
    const userId = sessionStorage.getItem('userId');

    if (!userId) {
      return <LoginModal/>
    } else {
      this.state.userLoggedIn = true;
      return (<Widget handleNewUserMessage={this.handleNewUserMessage} profileAvatar={logo} title="Women In Comedy" subtitle="Chat Message"/>)

    }
  }

  render() {
    return (<BrowserRouter>
      <MuiThemeProvider>
        <div>
          <Switch>
            <Route exact path='/' component={Form}></Route>
            <Route path='/feed' component={Feed}></Route>
            <Route path='/newevent' component={CreateEvents}></Route>
            <Route path='/events' component={EventsPage}></Route>
            <Route path="/home" component={HomePage}></Route>
            <Route path='/activities' component={ActivityPage}></Route>
            <Route path='/eventsfeed/:id' component={EventsFeed}></Route>
            {/* <Route exact path='/profile/:id' component={ProfilePage}></Route>
            <Route path='/profile/:id/edit' component={EditPage}></Route> */
            }
          </Switch>
          {this.renderChatWidget()}

        </div>
      </MuiThemeProvider>
    </BrowserRouter>)
  }
}

export default App;
