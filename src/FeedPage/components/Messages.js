import _ from 'lodash';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/messages.css';
import { acceptConnections, fetchPendingUserConnections, fetchUserConnections } from '../../actions';
class Messages extends Component {



  renderPendingConnections() {
    const userId = sessionStorage.getItem('userId');
    const callback = this.props.fetchPendingUserConnections;
    const callback2 = this.props.fetchUserConnections;
    return this.props.connections.map(connection => {
      return (
        <div key={connection.id}>
          <img id="connection-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
          <p id="connection-name">{connection.firstName} {connection.lastName}</p>
          <br/>
          <button type="button" onClick={() => this.props.acceptConnections(userId, connection.id, callback, callback2)}>accept</button>
          <button type="button">decline</button>
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
      </div>
    )
  }
}



export default connect(null, { acceptConnections, fetchPendingUserConnections, fetchUserConnections })(Messages);
