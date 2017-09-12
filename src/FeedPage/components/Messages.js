import _ from 'lodash';
import React from 'react';
import { Link } from 'react-router-dom';
import '../css/messages.css';

const Messages = (props) => {
  const {pendingUserConnections} = props;
  const userId = sessionStorage.getItem('userId');
  return (
    <div>
      <div>
        <p id="next-event">Next Event</p>
        <Link to="/events" id="events-link">View Upcoming Events</Link>
      </div>
      <br/>
      <div>
        <p id="connection"> Pending Connections <span id="connection-count">({pendingUserConnections.length})</span></p>
      </div>
      {renderPendingConnections(pendingUserConnections)}
    </div>
  );
};

const renderPendingConnections = (connections) => {
  return _.map(connections, connection => {
    console.log(connection);
    console.log('connection');
    return (
      <div key={connection.id}>
        <img id="connection-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
        <p id="connection-name">{connection.firstName} {connection.lastName}</p>
      </div>
    );
  });
};

export default Messages;
