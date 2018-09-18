import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserList from './components/UserList';
import AdminForm from './components/AdminForm';
import Navbar from '../common/Navbar';
import {LeftGraySideBar, RightGraySideBar, PageContent} from '../common';
import { bindActionCreators } from 'redux';
import { fetchAllUsers, fetchUserInfo, updateSettings, updateEvent, updatePublicFigure, updateIsMentor, fetchNotifications } from '../actions';
import './css/navbar.css';
import EmailModal from './components/EmailModal';


class CreateAdmin extends Component {

  componentDidMount() {
    const { fetchAllUsers, fetchUserInfo, fetchNotifications } = this.props;
    fetchAllUsers();
    /*updateSettings();*/
    fetchNotifications(sessionStorage.getItem('userId'));
  };



  render(){
    const {notifications} = this.props

    return(
      <div>
        <Navbar history={this.props.history} notifications={notifications}/>
        <LeftGraySideBar>
          <EmailModal />
        </LeftGraySideBar>
        <PageContent>
         <UserList 
          userInfo={this.props.userInfo} 
          fetchAllUsers={this.props.fetchAllUsers} 
          updatePublicFigure={this.props.updatePublicFigure} 
          updateIsMentor={this.props.updateIsMentor} 
          updateSettings={this.props.updateSettings} 
          users={this.props.allUsersList} 
          fetchUser={this.props.fetchUser}/>
        </PageContent>
        <RightGraySideBar>}
        </RightGraySideBar>
      </div>
    );
  }

}

function mapStateToProps(state) {
  const { userInfo, notifications } = state;
  return { allUsersList: state.allUsers, userInfo, notifications}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllUsers: fetchAllUsers, fetchUser: fetchUserInfo, updateSettings: updateSettings, updateUser: updateEvent, fetchNotifications: fetchNotifications, updatePublicFigure: updatePublicFigure, updateIsMentor: updateIsMentor }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdmin);
