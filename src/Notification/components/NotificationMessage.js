var React = require('react');
var ReactDOM = require('react-dom');
var NotificationSystem = require('react-notification-system');
import { Navbar, LeftGraySideBar, RightGraySideBar} from '../common';

var MyComponent = React.createClass({
  _notificationSystem: null,

  _addNotification: function(event) {
    event.preventDefault();
    this._notificationSystem.addNotification({
      message: 'Notification message',
      level: 'success'
    });
  },

  componentDidMount: function() {
    this._notificationSystem = this.refs.notificationSystem;
  },

  render: function() {
    return (
      <div>
        <button onClick={this._addNotification}>Add notification</button>
        <NotificationSystem ref="notificationSystem" />
      </div>
      );

  }
});

ReactDOM.render(
  React.createElement(MyComponent),
  document.getElementById('app')
);