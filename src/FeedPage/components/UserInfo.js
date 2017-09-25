import React from 'react';
import { Link } from 'react-router-dom';
import '../css/user-info.css';

const UserInfo = (props) => {
  const { firstName, lastName, bio, block_connection_requests } = props.userInfo;
  const { userConnections } = props;
  const userId = sessionStorage.getItem('userId');
  return (

    <div>
      <p>{firstName} {lastName}</p>
      <p>Bio</p>
      <p>{bio}</p>
      <p>Connections({userConnections.length})</p>
      {renderConnections(userConnections)}
      <div id="user-info">
       <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif"  />
        <p id="user-name">{firstName} {lastName}</p>
        <p id="bio">Bio</p>
        <p id="bio-content">{bio}</p>
        <Link to={`/profile/${userId}`} id="profile-link">View Profile</Link>

        <p id="connection">Connections <span id="connection-count">({userConnections.length})</span></p>
        <div id="connection-info-wrapper">
          {renderConnections(userConnections)}
        </div>
      </div>
    </div>
  );
};

const renderConnections = (connections) => {
  return connections.map(connection => {
    console.log(connection);
    return (
      <div key={connection.id}>
        <img id="connection-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
        <Link to={`/profile/${connection.id}`}><p id="connection-name">{connection.firstName} {connection.lastName}</p></Link>
      </div>
    );
  });
};

export default UserInfo;
