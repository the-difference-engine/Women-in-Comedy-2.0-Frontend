import React from 'react';

const UserInfo = (props) => {
  console.log('user info component', props.userInfo);
  console.log('user connections', props.userConnections);
  const { firstName, lastName, bio } = props.userInfo;
  return (
    <div>
      <p>{firstName} {lastName}</p>
      <p>bio</p>
      <p>{bio}</p>
      <p>Connections({props.userConnections.length})</p>
      {renderConnections(props.userConnections)}
    </div>
  );
};

const renderConnections = (connections) => {
  return connections.map(connection => {
    return (
      <div key={connection.id}>
        <p>{connection.firstName} {connection.lastName}</p>
      </div>
    );
  });
};

export default UserInfo;
