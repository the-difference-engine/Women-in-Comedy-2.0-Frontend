import React from 'react';
import '../css/profile-userinfo.css';
import { Link, Route } from 'react-router-dom';
import EditPage from '../../EditPage/EditPage';

const EditButton = (props) => {
  if (props.isAdmin) {
    return <Link to={props.url + '/edit'} > Admin Edit </Link>
  }
  return <Link to={props.url + '/edit'} > User Edit </Link>
}

const UserInfo = (props) => {
  console.log('match in UserInfo');
  console.log(props.url);

  if (props.userInfo) {
    const boolean = false;
    const { firstName, lastName, admin, bio, block_connection_requests } = props.userInfo
    return (
      <div>
        <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
        <p id="profile-name">{firstName} {lastName} </p>
        <p id="profile-bio-title">Bio</p>
        <p id="profile-bio-content">{bio}</p>
        <EditButton isAdmin={props.adminUser} url={props.url} />
        <Route  path={props.url + '/edit'}  component={EditPage} />
      </div>
    );
  }
  return <div></div>
};


export default UserInfo;
