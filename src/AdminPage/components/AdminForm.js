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
    this.onClick = this.onClick.bind(this);
    this.handleClick = this.handleClick.bind(this);
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

  onClick(e, userId = this.props.userId) {
    e.preventDefault();
    console.log('Button Clicked');
    let publicFigureStatus = this.props.publicFigureStatus;
    this.props.updatePublicFigure(userId, publicFigureStatus, this.props.fetchAllUsers);
  }

  handleClick(e, userId = this.props.userId) {
    e.preventDefault();
    let isMentorStatus = this.props.isMentorStatus;
    this.props.updateIsMentor(userId, isMentorStatus, this.props.fetchAllUsers);

  }

  renderAdminStatus(event) {
    let currentStatus;
    this.props.adminStatus === true
      ? (currentStatus = "Admin")
      : (currentStatus = "Non-Admin");
    return currentStatus;
  }

  changePublicFigureButton(userInfo = this.props.userInfo) {
    /*if publicFigure is true/false render according status*/
    let publicFigure = this.props.publicFigureStatus;
    
    if (publicFigure === true){
      return(
        <button className="btn adminButtonStyle" onClick={this.onClick}>Demote</button>
      )
    } else {
      return(
        <button className="btn adminButtonStyle" onClick={this.onClick}>Promote</button>
      )
    }
  }

  changeIsMentorButton(userInfo = this.props.userInfo) {
    /*if publicFigure is true/false render according status*/
    let isMentor = this.props.isMentorStatus;
    if (isMentor === true){
      return(
        <button className="btn adminButtonStyle" onClick={this.handleClick}>Demote</button>
      )
    } else {
      return(
        <button className="btn adminButtonStyle" onClick={this.handleClick}>Promote</button>
      )
    }
  }

  renderPublicFigure(event, userInfo = this.props.userInfo) {
    /*if publicFigure is true/false render according status*/
    let publicFigure = this.props.publicFigureStatus;
    let currentStatus;

    publicFigure === true
      ? (currentStatus = "Public Figure")
      : (currentStatus = "Not Public Figure");
    return currentStatus;
  }

  renderIsMentor(event, userInfo = this.props.userInfo) {
    /*if isMentor is true/false render according status*/
    let isMentor = this.props.isMentorStatus;
    let currentStatus;

    isMentor === true
      ? (currentStatus = "Mentor")
      : (currentStatus = "Not a Mentor");
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
          <div>{this.superUserRender()}</div>
        </form>
        <br/>
        <p>
          Public Figure Status: {this.renderPublicFigure()}
          <br/>
          {this.changePublicFigureButton()}
          <br/>
          <br/>
          Mentor Status: {this.renderIsMentor()} 
          <br/>
          {this.changeIsMentorButton()}
        </p>
        
        <br/>
        <br/>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { userInfo } = state;
  return { userInfo };
}

export {AdminForm};

export default connect(
  mapStateToProps,
  {
    fetchUserInfo
  }
)(AdminForm);
