import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import axios from "axios";
import UserList from "./UserList";
import SuperAdminForm from "./SuperAdminForm.js";
import { bindActionCreators } from "redux";
import "../css/navbar.css";
import "../css/modal.css";
import { fetchUserInfo, fetchAllUsers, updateToSuperAdmin, removeSuperAdminStatus} from "../../actions/index";


class AdminForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "Current"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, userId = this.props.userId, isSuperAdmin = this.props.isSuperAdmin) {
    event.preventDefault();

    let adminStatus = this.props.adminStatus;

    if (isSuperAdmin !== true){
      this.props.updateSettings(userId, adminStatus, this.props.fetchAllUsers);
      this.setState({ status: "Updated" });
    } else {
      alert("This user has Super User admin rights, cannot remove normal admin rights!");
    }

  }

  handleChange(event) {
    this.setState({ status: event.target.status });
  }

  renderAdminStatus(event) {
    let currentStatus;
    this.props.adminStatus == true
      ? (currentStatus = "Admin")
      : (currentStatus = "Non-Admin");
    return currentStatus;
  }

  SuperAdminRender(props) {
    return (
      <div className="admin-status">
        <input className="btn adminButtonStyle" type="submit" value="Change Admin Status" />
        <br />
      </div>
    );
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <p id="admin-status-display">
            Admin Status: {this.renderAdminStatus()}
          </p>
        {this.props.isLoggedInUserSuper === true ? 
          (
            <SuperAdminForm isSuperAdmin={this.props.isSuperAdmin} userId={this.props.userId} onClick={this.updateSuperAdmin} fetchAllUsers={this.props.fetchAllUsers}/> 
          )
          : (<p />)}
          <div>{this.SuperAdminRender()}</div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { userInfo, allUsers } = state;
  return { userInfo, allUsers };
}

export default connect(
  mapStateToProps,
  {
    fetchUserInfo,
    fetchAllUsers,
    removeSuperAdminStatus,
    updateToSuperAdmin
  }
)(AdminForm);
