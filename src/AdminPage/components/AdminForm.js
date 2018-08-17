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
      status: "Current",
      public_figure: this.props.userInfo.public_figure
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
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

  onClick(e, public_figure=this.state.public_figure) {
    e.preventDefault();
    /*let public_figure = userInfo.public_figure;*/
    console.log(this.state.public_figure)
    this.setState(prevState => ({
      public_figure: !prevState.public_figure
    }));

    /*axios({
      method: 'patch',
      url: process.env.REACT_APP_API_ENDPOINT + `users/public_figure`,
      data: {
        public_figure: this.state.public_figure,
      }
    });*/

    axios.patch(process.env.REACT_APP_API_ENDPOINT + `users/:id/public_figure`, {
        'public_figure': this.state.public_figure,
    })
    .then((response) => {
        console.log(response);
    });
  }

  renderAdminStatus(event) {
    let currentStatus;
    this.props.adminStatus == true
      ? (currentStatus = "Admin")
      : (currentStatus = "Non-Admin");
    return currentStatus;
  }

  changePublicFigureButton(userInfo = this.props.userInfo) {
    {/*if public_figure is true/false render according status*/}
    let public_figure = userInfo.public_figure;
    if (public_figure == true){
      return(
        <button onClick={this.onClick}>Demote</button>
      )
    } else {
      return(
        <button onClick={this.onClick}>Promote</button>
      )
    }
  }

  renderPublicFigure(event, userInfo = this.props.userInfo) {
    {/*if public_figure is true/false render according status*/}
    let public_figure = userInfo.public_figure;
    let currentStatus;
    public_figure === true
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
          <div>{this.superUserRender()}</div>
        </form>
        <br/>
          <p>
            Public Figure Status: {this.renderPublicFigure()}
          </p>
          {this.changePublicFigureButton()}
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
