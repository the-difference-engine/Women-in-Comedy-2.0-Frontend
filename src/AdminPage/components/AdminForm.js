import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import UserList from "./UserList";
import SuperAdminForm from "./SuperAdminForm.js";
import { bindActionCreators } from "redux";
import "../css/adminPage.css";
import "../css/modal.css";
import { fetchUserInfo, fetchAllUsers, updateToSuperAdmin, removeSuperAdminStatus} from "../../actions";


class AdminForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      status: "Current"
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onPubFigButtonClick = this.onPubFigButtonClick.bind(this);
    this.onMentorButtonClick = this.onMentorButtonClick.bind(this);
  }

  handleSubmit(event, userId = this.props.userId, isSuperAdmin = this.props.isSuperAdmin) {
    //Checks for SuperAdmin Status. If false, update status. If true, send alert.
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

  onPubFigButtonClick(e, userId = this.props.userId) {
    e.preventDefault();
    let publicFigureStatus = this.props.publicFigureStatus;
    this.props.updatePublicFigure(userId, publicFigureStatus, this.props.fetchAllUsers);
  }

  onMentorButtonClick(e, userId = this.props.userId) {
    e.preventDefault();
    let isMentorStatus = this.props.isMentorStatus;
    this.props.updateIsMentor(userId, isMentorStatus, this.props.fetchAllUsers);

  }

  renderAdminStatus(event) {
    let currentStatus = this.props.adminStatus ? "Admin" : "Non-Admin";
    return currentStatus;
  }

  changePublicFigureButton(userInfo = this.props.userInfo) {
    /*if publicFigure is true/false render according button*/
    let publicFigure = this.props.publicFigureStatus;
    
    if (publicFigure === true){
      return(
        <button className="btn adminButtonStyle" onClick={this.onPubFigButtonClick}>Demote</button>
      )
    } else {
      return(
        <button className="btn adminButtonStyle" onClick={this.onPubFigButtonClick}>Promote</button>
      )
    }
  }

  changeIsMentorButton(userInfo = this.props.userInfo) {
    /*if isMentor is true/false render according button*/
    let isMentor = this.props.isMentorStatus;
    if (isMentor === true){
      return(
        <button className="btn adminButtonStyle" onClick={this.onMentorButtonClick}>Demote</button>
      )
    } else {
      return(
        <button className="btn adminButtonStyle" onClick={this.onMentorButtonClick}>Promote</button>
      )
    }
  }

  renderPublicFigure(event, userInfo = this.props.userInfo) {
    /*if publicFigure is true/false render according status*/
    let publicFigure = this.props.publicFigureStatus;
    let currentStatus = publicFigure ? "Public Figure" : "Not Public Figure";
    return currentStatus;
  }

  renderIsMentor(event, userInfo = this.props.userInfo) {
    /*if isMentor is true/false render according status*/
    let isMentor = this.props.isMentorStatus;
    let currentStatus = isMentor ? "Mentor" : "Not a Mentor";
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
            Admin Status: {this.renderAdminStatus()}<br/><br/>
          </p>
        {this.props.isLoggedInUserSuper === true ? 
          (
            <SuperAdminForm isSuperAdmin={this.props.isSuperAdmin} userId={this.props.userId} onClick={this.updateSuperAdmin} fetchAllUsers={this.props.fetchAllUsers}/> 
          )
          : (<p />)}
          <div>{this.SuperAdminRender()}</div>
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
  const { userInfo, allUsers } = state;
  return { userInfo, allUsers };
}

export {AdminForm};

export default connect(
  mapStateToProps,
  {
    fetchUserInfo,
    fetchAllUsers,
    removeSuperAdminStatus,
    updateToSuperAdmin
  }
)(AdminForm);
