import React, { Component } from 'react';
import {connect} from 'react-redux';
import UserList from './components/UserList';
import AdminForm from './components/AdminForm';
import Navbar from '../common/Navbar';
import {LeftGraySideBar, RightGraySideBar, PageContent} from '../common';
import { bindActionCreators } from 'redux';
import { fetchAllUsers, fetchUserInfo, updateSettings, updateEvent, fetchNotifications } from '../actions';
import './css/navbar.css';
import EmailModal from './components/EmailModal';
import {CSVLink} from 'react-csv';

const headers = [
  {label: 'First Name', key: 'firstname'},
  {label: 'Last Name', key: 'lastname'},
  {label: 'Email', key: 'email'},
];

const data = [
  {firstname: 'Ahmed', lastname: 'Tomi' , email: 'ah@smthing.co.com'},
  {firstname:'Raed', lastname:'Labes' , email:'rl@smthing.co.com'} ,
  {firstname:'Yezzi', lastname:'Min l3b', email:'ymin@cocococo.com'}
];

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
      <div>
        <Navbar history={this.props.history} notifications={notifications}/>
        <LeftGraySideBar>
          <EmailModal />
          <CSVLink data={data}
      filename={"my-file.csv"}
      className="btn btn-primary"
      target="_blank">
        Download me
    </CSVLink>
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
  const { userInfo, notifications } = state;
  return { allUsersList: state.allUsers, userInfo, notifications}
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchAllUsers: fetchAllUsers, fetchUser: fetchUserInfo, updateSettings: updateSettings, updateUser: updateEvent, fetchNotifications: fetchNotifications }, dispatch)
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAdmin);
