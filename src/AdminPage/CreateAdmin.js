import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserList from './components/UserList';
import AdminForm from './components/AdminForm';
import Navbar from '../common/Navbar';
import {LeftGraySideBar, RightGraySideBar, PageContent} from '../common';
import { bindActionCreators } from 'redux';
import { fetchAllUsers, fetchUserInfo, updateSettings, updateEvent } from '../actions'; //action 
import './css/navbar.css';


//TODO
//
//display details with onClick function on list item (similar to books)
//FORM STUFF:
//display component only if admin edit is true //create 
class CreateAdmin extends Component {

  componentDidMount() {
    const { fetchAllUsers, fetchUserInfo, activeUser, updateSettings } = this.props;
    fetchAllUsers();
    updateSettings();
  };

  renderUserDetails(event) {
    const userInfo = this.props.fetchUserInfo()
  }

  render(){

    return(
      <div>
        <Navbar history={this.props.history} />
        <LeftGraySideBar>
        </LeftGraySideBar>
        <PageContent>
         <UserList users={this.props.allUsersList} fetchUser={this.props.fetchUser} updateSettings=      {this.props.updateSettings} />
        </PageContent>
        <RightGraySideBar>
        </RightGraySideBar>
        
         
        
        
      </div>
    ); 
  }

}

function mapStateToProps(state) {
  return { allUsersList: state.allUsers }
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllUsers: fetchAllUsers, fetchUser: fetchUserInfo, updateSettings: updateSettings, updateUser: updateEvent }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdmin);


//sessionstorage function 