import React from 'react';
import '../css/profile-userinfo.css';

const userIsAdmin = sessionStorage.getItem('adminUser');
console.log("USER IS ADMIN? " + userIsAdmin);
const UserInfo = (props) => {
  if (props.userInfo) {
    const { firstName, lastName, admin, bio, block_connection_requests } = props.userInfo
    return (
      <div>
        <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
        <p id="profile-name">{firstName} {lastName}</p>
        <p id="profile-bio-title">Bio</p>
        <p id="profile-bio-content">{bio}</p>
        {
          sessionStorage.getItem('adminUser') ? (<button>Only Admin</button>) :
          (<div> Nothing</div>)
        }

      </div>
    );
  }
  return <div></div>
};


export default UserInfo;
