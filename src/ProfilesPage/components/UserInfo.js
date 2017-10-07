import React from 'react';
import '../css/profile-userinfo.css';

const UserInfo = (props) => {
  if (props.userInfo) {
    const { firstName, lastName, bio, admin, block_connection_requests } = props.userInfo
    return (
      <div>
        <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
        <p id="profile-name">{firstName} {lastName}</p>
        <p id="profile-bio-title">Bio</p>
        <p id="profile-bio-content">{bio} ADMIN: {admin} </p>

      </div>
    );
  }
  return <div></div>
};


export default UserInfo;
  