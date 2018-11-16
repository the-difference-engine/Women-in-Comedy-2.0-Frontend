import React, { Component } from "react";
import { connect } from "react-redux";
import AdminForm from "./AdminForm";

class UserList extends Component {

  renderSuperAdminList() {
    const users = this.props.users.userList;

    return users.map(user => {
      return (
        <li key={user.id}>
          {user.firstName} {user.lastName}
          <p>{user.email}</p>
          <AdminForm
            isLoggedInUserSuper = {this.props.userInfo.superadmin}
            isSuperAdmin={user.superadmin}
            adminStatus={user.admin}
            publicFigureStatus={user.public_figure}
            fetchAllUsers={this.props.fetchAllUsers}
            isMentorStatus={user.is_mentor}
            userId={user.id}
            fetchUser={this.props.fetchUser}
            updateSettings={this.props.updateSettings}
            updatePublicFigure={this.props.updatePublicFigure}
            updateIsMentor={this.props.updateIsMentor}
          />
        </li>
      );
    });
  }

  render() {
    const user = this.props.userInfo;

    if (this.props.users.userList.length == 0) {
      return <strong>Loading....</strong>;
    }

    return (
      <ol className="list-group col-sm-4">
        <p>
          {this.renderSuperAdminList()}
        </p>
      </ol>
    );
  }
}

function mapStateToProps(state) {
  return {
    allUsersList: state.allUsers
  };
}

export default connect(mapStateToProps)(UserList);
