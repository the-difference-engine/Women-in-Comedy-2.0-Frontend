import React, {Component} from 'react';
import {Widget, addResponseMessage, handleNewUserMessage} from 'react-chat-widget';
import logo from '../images/Women.png';
import Cable from 'actioncable';
import LoginModal from '../common/LoginModal';
import './css/chat.css';

class ChatWidget extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.createSocket();
    this.setState({currentMessage: ''});
  }

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

  render() {
    return (<Widget handleNewUserMessage={this.handleNewUserMessage} profileAvatar={logo} title="Women In Comedy" subtitle="Chat Message"/>)
  }
}

export default ChatWidget;
