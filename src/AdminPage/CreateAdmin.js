import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserList from './components/UserList';
import AdminForm from './components/AdminForm';
import Navbar from '../common/Navbar';
import {LeftGraySideBar, RightGraySideBar, PageContent} from '../common';
import { bindActionCreators } from 'redux';
import { fetchAllUsers, fetchUserInfo, updateSettings, updateEvent } from '../actions'; 
import './css/navbar.css';


class CreateAdmin extends Component {

  componentDidMount() {
    const { fetchAllUsers, fetchUserInfo, updateSettings } = this.props;   
    fetchAllUsers();
    updateSettings();

  };



  render(){


    return(
      <div>
        <Navbar history={this.props.history}/>
        <LeftGraySideBar>
        </LeftGraySideBar>
        <PageContent>
         <UserList userInfo={this.props.userInfo} users={this.props.allUsersList} fetchUser={this.props.fetchUser} updateSettings={this.props.updateSettings} />
        </PageContent>
        <RightGraySideBar>
        </RightGraySideBar>
      </div>
    ); 
  }

}

function mapStateToProps(state) {
  const { userInfo } = state;
  return { allUsersList: state.allUsers, userInfo}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllUsers: fetchAllUsers, fetchUser: fetchUserInfo, updateSettings: updateSettings, updateUser: updateEvent }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdmin);
