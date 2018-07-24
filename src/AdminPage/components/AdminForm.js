import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import axios from "axios";
import UserList from "./UserList";
import SuperUserForm from "./SuperUserForm.js";
import { bindActionCreators } from "redux";
import "../css/navbar.css";
import "../css/modal.css";
import { fetchUserInfo, updateToSuperUser, removeSuperUserStatus} from "../../actions/index";


class AdminForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "Current"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event, userId = this.props.userId, isSuperUser = this.props.isSuperUser) {
    event.preventDefault();

    let adminStatus = this.props.adminStatus;

    if (isSuperUser !== true){
      this.props.updateSettings(userId, adminStatus);
      setTimeout(function() {
        window.location.reload();
      }, 10);
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
    this.props.adminStatus === true
      ? (currentStatus = "Admin")
      : (currentStatus = "Non-Admin");
    return currentStatus;
  }

  superUserRender(props) {
    return (
      <div className="admin-status">
        <input className="btn adminButtonStyle" type="submit" value="Submit Admin Status Change" />
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
            <SuperUserForm isSuperUser={this.props.isSuperUser} userId={this.props.userId} onClick={this.updateSuperUser}/> 
          )
          : (<p />)}
          <div>{this.superUserRender()}</div>
        </form>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { userInfo } = state;
  return { userInfo };
}

export default connect(
  mapStateToProps,
  {
    fetchUserInfo, 
    removeSuperUserStatus,
    updateToSuperUser
  }
)(AdminForm);
