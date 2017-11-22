import React from 'react';
import '../css/profile-userinfo.css';

const EditButton = (props) => {
  if (props.isAdmin) {
    return <button>Admin Edit</button>
  }
  return <button>User Edit</button>
}

const UserInfo = (props) => {
  if (props.userInfo) {

    // const userIsAdmin = sessionStorage.getItem('adminUser');
    console.log(props.adminUser);
    const boolean = false;
    const { firstName, lastName, admin, bio, block_connection_requests } = props.userInfo
    return (
      <div>
        <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
        <p id="profile-name">{firstName} {lastName} {admin}</p>
        <p id="profile-bio-title">Bio</p>
        <p id="profile-bio-content">{bio}</p>
        <EditButton isAdmin={props.adminUser} />

      </div>
    );
  }
  return <div></div>
};


export default UserInfo;
