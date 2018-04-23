import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserList from './components/UserList';
import UserDetail from './components/UserDetail';
import AdminForm from './components/AdminForm';
import HeaderComponent from '../HomePage/components/HeaderComponent';
import {LeftGraySideBar, RightGraySideBar, PageContent} from '../common';
import { bindActionCreators } from 'redux';
import { fetchAllUsers, fetchUserInfo, activeUser, updateSettings, updateEvent } from '../actions'; //action 
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

  render(){

    return(
      <div>
        <HeaderComponent />
        <LeftGraySideBar>
        </LeftGraySideBar>
        <PageContent>
         <UserList users={this.props.allUsersList} fetchUser={this.props.fetchUser} updateSettings=      {this.props.updateSettings} />
        <UserDetail  activeUser={this.props.activeUser} /> 
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
  return bindActionCreators({ fetchAllUsers: fetchAllUsers, fetchUser: fetchUserInfo, activeUser: activeUser, updateSettings: updateSettings, updateUser: updateEvent }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdmin);


//sessionstorage function 