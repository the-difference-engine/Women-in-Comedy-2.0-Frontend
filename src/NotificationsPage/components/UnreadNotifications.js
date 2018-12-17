import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/notifications-page.css';
import {
  acceptConnection,
  declineConnection,
  fetchPendingUserConnections,
  fetchUserConnections,
  markNotificationsAsRead,
  markOneAsRead
} from "../../actions";

class UnreadNotification extends Component {
  acceptTheConnection(userId, sent_from, callback, callback2, sent_to, id) {
    this.props.acceptConnection(userId, sent_from, callback, callback2);
    this.props.markOneAsRead(sent_to, id);
  }

  declineTheConnection(userId, sent_from, callback, sent_to, id) {
    const connection = this.props.connections.filter(connection => connection.senderId === sent_from);
    if (connection.size > 0) {
      this.props.declineConnection(userId, connection[0].requestId, callback);
    }
    this.props.markOneAsRead(sent_to, id);
  }

  renderNotifications() {
    const userId = sessionStorage.getItem('userId');
    const callback = this.props.fetchPendingUserConnections;
    const callback2 = this.props.fetchUserConnections;
    if (this.props.notifications === null) {
      return <div>You have no notifications at this time.</div>
    } else {
      return this.props.notifications.notifications.map(notification => {
        if (notification.action === "connection_accepted") {
          return (
            <div key={notification.id}>
              <div id="user-info" className="container">
                <div className="row">
                  <div className="col-xs-12">
                    <img id="connection-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt=""/>

                    <Link to={`/profile/${notification.sent_from}`}
                          onClick={() => this.props.markOneAsRead(notification.sent_to, notification.id)}
                          method="POST"><p
                          className="connection-name">{notification.sent_from_name} </p></Link>
                    <span>has accepted your connection request</span>
                  </div>
                </div>
              </div>
            </div>
          );
        }
        if (notification.action === "connection_request" && notification.seen == null) {
          return (
            <div key={notification.id}>
              <div id="user-info" classname="container" >
                <div className="row">
                  <div className="col-xs-9">
                    <img id="connection-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt=""/>

                    <Link to={`/profile/${notification.sent_from}`}
                          onClick={() => this.props.markOneAsRead(notification.sent_to, notification.id)}
                          method="POST"><p
                          className="connection-name">{notification.sent_from_name}</p></Link>
                    <span>has sent you a connection request</span>
                  </div>
                  <div className="col-xs-3 btn-container">
                    <button type="button" className="btn-accept-decline"
                            onClick={() => this.acceptTheConnection(userId, notification.sent_from, callback, callback2, notification.sent_to, notification.id)}>accept
                    </button>
                    <button type="button" className="btn-accept-decline"
                            onClick={() => this.declineTheConnection(userId, notification.sent_from, callback, notification.sent_to, notification.id)}>decline
                    </button>
                  </div>
                </div>









                
  
              </div>
            </div>
          );
        }
      });
    }
  };

render() {
    return (
	    <div className="notifications-content">
        <div className="container notif-grid">
          <div className="row" >
            <div className="col-xs-1" id="my-notif">
              <h1 className="notif-header" id="next-notif">Notifications</h1>
              <button type="button" className="btn btn-danger"
                      onClick={() => this.props.markNotificationsAsRead(sessionStorage.getItem('userId'))}>Mark
              	All As Read
              </button>
            </div>
          </div>
          <div className="row">
            <br/>
            {this.renderNotifications()}
            <br/>
          </div>
        </div>
	    </div>
	  );
  };

  BackgroundImage() {
      return (<div className="img"></div>)
  };

};



export default connect(null, {
  acceptConnection,
  declineConnection,
  fetchPendingUserConnections,
  fetchUserConnections,
  markNotificationsAsRead,
  markOneAsRead
})(UnreadNotification);
