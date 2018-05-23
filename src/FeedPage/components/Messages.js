import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/messages.css';
import { acceptConnection, acceptInvite, fetchPendingUserConnections, fetchPendingUserInvites, fetchUserConnections, declineConnection, declineInvite } from '../../actions';
class Messages extends Component {

  renderPendingConnections() {
    const userId = sessionStorage.getItem('userId');
    const callback = this.props.fetchPendingUserConnections;
    const callback2 = this.props.fetchUserConnections;
    return this.props.connections.map(connection => {
      return (
        <div key={connection.requestId}>
          <img id="connection-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
          <p id="connection-name">{connection.firstName} {connection.lastName}</p>
          <br/>
          <button type="button" onClick={() => this.props.acceptConnection(userId, connection.senderId, callback, callback2)}>accept</button>
          <button type="button" onClick={() => this.props.declineConnection(userId, connection.requestId, callback)}>decline</button>
        </div>
      );
    });
  }

  renderPendingInvites() {
    const userId = sessionStorage.getItem('userId');
    //const callback = this.props.fetchPendingUserInvites;
    //callback2
    return this.props.invites.map(invite => {
      return (
        <div key={invite.requestId}>
          <p id="connection-name">{invite.event} from {invite.firstName} {invite.lastName}</p>
          <br/>
          <button type="button" onClick={() => this.props.acceptInvite(userId, invite.senderId)}>accept</button>
          <button type="button" onClick={() => this.props.declineInvite(userId, invite.requestId)}>decline</button>
        </div>
      );
    });
  }

  render() {
    const { pendingUserConnections } = this.props;
    return (
      <div>
        <div>
          <p id="next-event">Next Event</p>
          <Link to="/events" id="events-link">View Upcoming Events</Link>
        </div>
        <br/>
        <div>
          <p id="connection"> Pending Connections <span id="connection-count">({this.props.connections.length})</span></p>
        </div>
        {this.renderPendingConnections()}
        <div>
          <p id="connection"> Pending Event Invites <span id="connection-count">({this.props.invites.length})</span></p>
        </div>
        {this.renderPendingInvites()}
      </div>
    )
  }
}



export default connect(null, { acceptConnection, acceptInvite, fetchPendingUserConnections, fetchPendingUserInvites, fetchUserConnections, declineConnection, declineInvite })(Messages);
