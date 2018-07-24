import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import axios from "axios";
import UserList from "./UserList";
import { bindActionCreators } from "redux";
import "../css/navbar.css";
import "../css/modal.css";
import { fetchUserInfo, updateToSuperUser, removeSuperUserStatus} from "../../actions/index";


class SuperUserForm extends Component {
    constructor(props) {
        super(props);
      }

      render(){
        return(
            this.props.isSuperUser === true ? 
            (<div>
              <p> SuperUser Status: Super User</p>
              <button type="button" onClick={() => this.props.removeSuperUserStatus(this.props.userId)}> Remove Super User Setting </button>
            </div>) 
            : (<div>
                <p> SuperUser Status: NonSuperUser</p>
                <button type="button" onClick={() => this.props.updateToSuperUser(this.props.userId)}> Give Super User Status </button>
              </div>)
          )
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
  )(SuperUserForm);