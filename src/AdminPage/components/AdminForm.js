import React, { Component } from 'react';
import { connect } from 'react-redux';
import {reduxForm, Field} from 'redux-form';
import axios from 'axios';
import UserList from './UserList';
import { bindActionCreators } from 'redux';
import '../css/navbar.css';



 
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
    this.setState({ status : 'Updated' }); //re-render and clear field 
    // console.log("yes", this.state.status)
  }


  handleChange(event) {
    this.setState({status: event.target.status});
  }

  renderAdminStatus(event) {
    let currentStatus;
    this.props.adminStatus == true ? currentStatus = "Admin" : currentStatus = "Non-Admin";
    return currentStatus;
  }
 
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
         <p id="admin-status-display">Admin Status: {this.renderAdminStatus()}</p>

         <h6>Switch Status?</h6>
         <input type="submit" value="Submit"/>
         <input type="checkbox" name="checkbox_admin"/><br></br>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    adminEdit: state.adminEdit 
  }
};

export default connect(mapStateToProps)(AdminForm);
 
// export default reduxForm({form: 'userEdit'})(AdminForm)




//Register

// onSubmit(values) {
//   axios.post(process.env.REACT_APP_API_URL_DEV + 'users', values).then(payload => {
//     this.setState({userMade: true});
//   }).catch(err => {
//     alert(err)
//   });

    // console.log(userId)
    // const request = axios({
    //   method: "patch",
    //   url: process.env.REACT_APP_API_URL_DEV + `/users/${userId}`,
    //   headers: {"id": userId},
    // }).then(data => console.log(data.data))