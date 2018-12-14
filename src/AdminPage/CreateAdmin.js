import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserList from './components/UserList';
import AdminForm from './components/AdminForm';
import Navbar from '../common/Navbar';
import {LeftGraySideBar, RightGraySideBar, PageContent} from '../common';
import { bindActionCreators } from 'redux';
import { fetchAllUsers, fetchUserInfo, updateSettings, updateEvent, updatePublicFigure, updateIsMentor, fetchNotifications } from '../actions';
import './css/adminPage.css';
import EmailModal from './components/EmailModal';


class CreateAdmin extends Component {

  componentDidMount() {
    const valid = sessionStorage.getItem('confirmed');
    if(valid === 'null' || !valid) {
      this.props.history.push('/');
    }
    const { fetchAllUsers, fetchUserInfo, updateSettings, fetchNotifications } = this.props;
    fetchAllUsers();
    fetchNotifications(sessionStorage.getItem('userId'));
  };



  render(){
    const {notifications} = this.props

    return(
      <div className="container">
        <div className="row">
          <div className='col-lg-12'>

        <Navbar history={this.props.history} notifications={notifications}/>
          <h3>row1</h3>
          </div>

       <div className="row">
        <div className='col-lg-3'>
        <LeftGraySideBar>

          <EmailModal />
        </LeftGraySideBar>
        <h3>left side bar</h3>
        </div>

        <div className='col-lg-6'>
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
        <h3> middle </h3>
        </div>
        <div className='col-lg-3'>
        <RightGraySideBar>
        </RightGraySideBar>
        <h3>right bar</h3>
        
        </div>
        </div>
        </div>
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
