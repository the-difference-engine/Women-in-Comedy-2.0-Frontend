import React, { Component } from "react";
import { connect } from "react-redux";
import { reduxForm, Field } from "redux-form";
import axios from "axios";
import UserList from "./UserList";
import { bindActionCreators } from "redux";
import "../css/navbar.css";
import "../css/modal.css";
import { fetchUserInfo, updateToSuperAdmin, removeSuperAdminStatus} from "../../actions";


class SuperAdminForm extends Component {
    constructor(props) {
        super(props);
        
      }

      
      updateSuperAdmin = (event, id) => {
        event.preventDefault();
        if (this.props.isSuperAdmin === true){
          this.props.removeSuperAdminStatus(id, this.props.fetchAllUsers);
        } else {
          this.props.updateToSuperAdmin(id, this.props.fetchAllUsers);
        }
      }

      render(){
        return(
            this.props.isSuperAdmin === true ? 
            (<div className="admin-status">
              <h6 className="super-user"> SuperAdmin Status: Super User</h6>
              <button className="btn superAdminButtonStyle" type="button" onClick={(e) => this.updateSuperAdmin(e, this.props.userId)}> Remove Super User Setting </button>
            </div>) 
            : (<div className="admin-status">
                <h6 className="super-admin"> SuperAdmin Status: NonSuperAdmin</h6>
                <button className="btn superAdminButtonStyle" type="button" onClick={(e) => this.updateSuperAdmin(e, this.props.userId)}> Give Super User Status </button>
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
      removeSuperAdminStatus,
      updateToSuperAdmin
    }
  )(SuperAdminForm);