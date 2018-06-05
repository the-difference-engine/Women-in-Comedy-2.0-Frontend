import React from 'react';
import '../css/profile-userinfo.css';
import {Link, Route} from 'react-router-dom';
import EditPage from '../../EditPage/EditPage';

const EditButton = (props) => {
  if (props.isAdmin) {
    return (<Link to={props.url + '/edit'} onClick={props.onButtonClicked}>
      Admin Edit
    </Link>)
  }
  return (<Link to={props.url + '/edit'} onClick='props.buttonClicked(true)'>
    User Edit
  </Link>)
}

const UserInfo = (props) => {

  const handleClick = () => {
    props.editButtonClicked(true);
  }

  if (props.userInfo) {


    const { id, suspended, firstName, lastName, bio, block_connection_requests, admin } = props.userInfo;
    return (

      <div>
        <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
        <p id="profile-name">{firstName} {lastName} </p>
        <p id="profile-bio-title">Bio  </p>
        <p id="profile-bio-content">{bio}</p>
      </div>
    );

  }
  return <div>Something is Here
  </div>
};

const AdminInfo = (props) => {}


export default UserInfo;
