import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import axios from "axios";
import UserList from "./UserList";
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

  handleSubmit(event, userId = this.props.userId) {
    event.preventDefault();

    let adminStatus = this.props.adminStatus;
    this.props.updateSettings(userId, adminStatus);

    let displayAdmin;
    adminStatus === true
      ? (displayAdmin = "Have Been Removed")
      : (displayAdmin = "Have Been Added");

    alert("Admin Privlages " + displayAdmin);

    setTimeout(function() {
      window.location.reload();
    }, 10);
    this.setState({ status: "Updated" });
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

  // render superUser status only if user viewing is a superUser
  renderSuperUserStatus () {
    // let superUserStatus;
    // this.props.isSuperUser === true ? (superUserStatus = "SUPER USER") : (superUserStatus= "NonSuperUser");
    // return superUserStatus;
    return(
      this.props.isSuperUser === true ? 
      (<div>
        <p> SuperUser Status: Super User</p>
        <button onClick={() => removeSuperUserStatus(this.props.userId)}> Remove Super User Setting </button>
      </div>) 
      : (<div>
          <p> SuperUser Status: NonSuperUser</p>
          <button onClick={() => updateToSuperUser(this.props.userId)}> Give Super User Status </button>
        </div>)
    )
   
  }

  superUserRender(props) {
    return (
      <div className="admin-status">
        <h6>Switch Status?</h6>
        <input className="btn adminButtonStyle" type="submit" value="Submit" />
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
          (this.renderSuperUserStatus())
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
    fetchUserInfo
  }
)(AdminForm);
