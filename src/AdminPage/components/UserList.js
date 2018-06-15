import React, { Component } from "react";
import { connect } from "react-redux";
import AdminForm from "./AdminForm";

class UserList extends Component {
  componentDidMount() {
    // setTimeout(function(){
    //   window.location.reload();},10);
  }

  renderSuperAdminList() {
    const users = this.props.users.userList;
    console.log("render admin stuff", this.props);
    return users.map(user => {
      return (
        <li key={user.id}>
          {user.firstName} {user.lastName}
          <p>{user.email}</p>
          <AdminForm
            isSuperUser={user.superuser}
            adminStatus={this.props.userInfo}
            userId={user.id}
            fetchUser={this.props.fetchUser}
            updateSettings={this.props.updateSettings}
          />
        </li>
      );
    });
    setTimeout(function() {
      window.location.reload();
    }, 10);
  }

  renderNonAdminList() {
    console.log("the props", this.props);
    const users = this.props.users.userList;
    return users.map(user => {
      return (
        <li key={user.id}>
          <h4>
            {user.firstName} {user.lastName}
          </h4>
          <h5>Admin Status:</h5>
          {user.admin == true ? (
            <h5 className="admin-show">Admin</h5>
          ) : (
            <h5 className="admin-show">Non Admin</h5>
          )}
        </li>
      );
      setTimeout(function() {
        window.location.reload();
      }, 10);
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
          {user.admin ? this.renderSuperAdminList() : this.renderNonAdminList()}
        </p>
      </ol>
    );
  }
}

//return value will be props into userlist
function mapStateToProps(state) {
  return {
    allUsersList: state.allUsers
  };
}

export default connect(mapStateToProps)(UserList);
