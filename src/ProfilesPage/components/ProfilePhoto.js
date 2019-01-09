import React from 'react';
import '../css/profilephoto.css';


const ProfilePhoto = (props) => {
	const query = window.location.pathname;
	const new_query = query.slice(9);


    const { firstName, lastName, bio, block_connection_requests, photo} = props.userInfo;

    const { userConnections } = props;


    // width="180px" height="180px"

  return (
    <div id="left-side-bar">
      <div id="left-side-bar-content">
        <div id="bio-pic" className="profile-photo">
          <img src="https://u.o0bc.com/avatars/no-user-image.gif" alt=""/>
        </div>
        <p className="bio-name">{firstName} {lastName}</p>
        <p className="bio-title">Bio</p>
        <p className="bio-desc">{bio}</p>
      </div>
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
	
}
export default ProfilePhoto;
