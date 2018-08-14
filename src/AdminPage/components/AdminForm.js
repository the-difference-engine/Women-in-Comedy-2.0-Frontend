import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import axios from "axios";
import UserList from "./UserList";
import { bindActionCreators } from "redux";
import "../css/navbar.css";
import "../css/modal.css";
import { fetchUserInfo } from "../../actions/index";

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
    adminStatus == true
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
    this.props.adminStatus == true
      ? (currentStatus = "Admin")
      : (currentStatus = "Non-Admin");
    return currentStatus;
  }

  renderPublicFigure(event, userInfo = this.props.userInfo) {
    {/*if public_figure is true/false render according status*/}
    let public_figure = this.props.userInfo.public_figure;
    let currentStatus;
    this.props.public_figure == true
      ? (currentStatus = "Public Figure")
      : (currentStatus = "Not Public Figure");
    return currentStatus;
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
            Admin Status: {this.renderAdminStatus()}<br/><br/>
          </p>
          <br/>
          <p>
            Public Figure Status: {this.renderPublicFigure()}
          </p>

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
