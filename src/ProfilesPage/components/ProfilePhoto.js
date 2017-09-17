import React from 'react';
import '../css/profilephoto.css';


const ProfilePhoto = (props) => {
	const query = window.location.pathname;
	const new_query = query.slice(9);
	// console.log('new query below');
	// console.log(new_query);
	// console.log('props.children below');
	// console.log(props.children);

    const { firstName, lastName, bio } = props.userInfo;

    const { userConnections } = props;
    // console.log('userConnections = props below');
    // console.log({userConnections});

    // width="180px" height="180px"

  return (
    <div id="left-side-bar">
      <div id="left-side-bar-content">
        <div id="bio-pic" className="profile-photo"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt=""/></div>
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
