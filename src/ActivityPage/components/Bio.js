import React from 'react';
import '../css/bio.css';


const Bio = (props) => {
  const { firstName, lastName, bio } = props.userInfo;

  return (
    <div id="activity-bio">
      <div className="activity-bio-content">
        <div id="bio-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /></div>
        <p className="bio-name">{firstName} {lastName} </p>
        <p className="bio-title">Bio</p>
        <p className="bio-desc">{bio} </p>
      </div>
    </div>
  );
}

const renderUsers = (users) => {
  return users.map(user => {
    return (
      <div key={user.id}>
        <p>{user.firstName} {user.lastName} </p>
      </div>
    );
  });
}

export default Bio;



