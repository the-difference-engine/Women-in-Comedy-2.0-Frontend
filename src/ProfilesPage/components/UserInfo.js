import React from 'react';
import '../css/profile-userinfo.css';

const UserInfo = (props) => {
  if (props.userInfo) {
    const { id, firstName, lastName, bio, block_connection_requests, suspension_reason, admin, suspended } = props.userInfo
    return (
      <div>
        <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
        <p id="profile-name">{firstName} {lastName} {suspended}</p>
        <p id="profile-bio-title">Bio</p>
        <p id="profile-bio-content">{bio}</p>
      </div>
    );
  }
  return <div></div>
};

const AdminInfo = (props) => {}


export default UserInfo;
