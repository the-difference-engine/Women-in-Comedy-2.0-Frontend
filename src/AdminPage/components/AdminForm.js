import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import axios from 'axios';
import UserList from './UserList';
import { bindActionCreators } from 'redux';
import '../css/navbar.css';
import { fetchUserInfo } from '../../actions/index';


class AdminForm extends Component {

  constructor(props){
    super(props)

    this.state = {
      status: 'Current'
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  };


  handleSubmit(event, userId = this.props.userId) {
    event.preventDefault();
    
    let adminStatus = this.props.adminStatus;
      this.props.updateSettings(userId, adminStatus);

    let displayAdmin;
      adminStatus == true ? displayAdmin = "Have Been Removed" : displayAdmin = "Have Been Added";
    
    alert("Admin Privlages " + displayAdmin)
    setTimeout(function(){
      window.location.reload();},10); //re-render and clear field 
    this.setState({ status : 'Updated' });
  }


  handleChange(event) {
    this.setState({status: event.target.status});
  }

  //function to show current status in window` 
  renderAdminStatus(event) {
    let currentStatus;
      this.props.adminStatus == true ? currentStatus = "Admin" : currentStatus = "Non-Admin";
    return currentStatus;
  }

  superUserRender(props){
    const { userInfo } = this.props;
    const superUser = (userInfo.superuser == true);
    if(superUser){
      return (
         <div>
          <h6>Switch Status?</h6>
            <input type="submit" value="Submit"/><br></br>
            ------------------
        </div>
      );
      setTimeout(function(){
        window.location.reload();},10);
    }  
  }
 
  render() {

    return (
      <div>
        <form onSubmit={this.handleSubmit}>
         <p id="admin-status-display">Admin Status: {this.renderAdminStatus()}</p>
    
          <div>
            {this.superUserRender()}
          </div>
        </form>
      </div>  
    );
  }
}

function mapStateToProps(state) {
  const { userInfo } = state;
  return { userInfo }
};

export default connect(mapStateToProps, {
  fetchUserInfo
})(AdminForm);
 
