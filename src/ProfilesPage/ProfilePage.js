import React, { Component } from "react";
import { connect } from "react-redux";
import _ from "lodash";
import {
  fetchUserInfo,
  fetchUserFeeds,
  fetchUserConnections,
  createConnectionRequest,
  fetchConnectionStatus,
  userWallInputChange,
  fetchNotifications,
  createPostOnUserWall,
  blockConnectionRequests,
  suspendUser,
  unsuspendUser,
  deleteUser,
  editUser
} from "../actions";
import { LeftGraySideBar, PageContent, RightGraySideBar } from "../common";
import Navbar from "../common/Navbar";
import UserInfo from "./components/UserInfo";
import ProfileConnections from "./components/ProfileConnections";
import ProfileFeed from "./components/ProfileFeed";
import EditPage from "../EditPage/EditPage";
import { resolve } from "url";

const userId = sessionStorage.getItem("userId");
const adminUser = sessionStorage.getItem("adminUser");
const admin = sessionStorage.getItem("isAdmin");
// var editButtonClicked = false;

class ProfilePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editUserEnable: false,
      suspendedState: null
    };
  };

  componentDidMount() {
    const sender_id = sessionStorage.getItem("userId");
    const receiver_id = this.props.match.params.id;
    const { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchConnectionStatus, fetchNotifications } = this.props;
    fetchUserInfo(this.props.match.params.id);
    fetchUserFeeds(this.props.match.params.id);
    fetchUserConnections(this.props.match.params.id);
    fetchConnectionStatus({ sender_id, receiver_id });
    fetchNotifications(sender_id);
    this.setState(() => {
      return { suspendedState: this.props.userInfo.suspended };
    });
    /*this.setState({ editUserEnable: false });*/
  }

  onPress() {
    const sender_id = sessionStorage.getItem("userId");
    const receiver_id = this.props.match.params.id;
    const data = {
      sender_id,
      receiver_id
    };
    this.props.createConnectionRequest(data);
  }

  onBlockConnection() {
    const sender_id = sessionStorage.getItem("userId");
    this.props.blockConnectionRequests(sender_id);
  }

  onPost() {
    const body = this.props.userWallPost;
    const userId =
      this.props.match.params.id || sessionStorage.getItem("userId");
    const authorId = sessionStorage.getItem("userId");
    this.props.createPostOnUserWall(
      {
        body,
        userId,
        authorId
      },
      this.props.fetchUserFeeds
    );
  }

  renderEditUserButton() {
    console.log(this.state.editUserEnable);
    return (
      <button className="btn btn-info" onClick={this.handleEditButtonClick.bind(this)}>
        {/*if this.state.editUserEnable === false render "back" else render "Edit"*/}
        {this.state.editUserEnable ? "Back" : "Edit"}
      </button>
    );
  }

  handleEditButtonClick() {
    // Edit User accepts a boolean value, that is the current logged in
    // user is an admin or not. If it is the admin, render the Admin Edit form,
    // if it is a regular user, render user edit form.
    this.props.editUser(adminUser);
    //Togle the editUser function enable or not enable
    this.setState(prevState => ({
      editUserEnable: !prevState.editUserEnable
    }));
  }

  //This is to be passed to child components to update
  //the state of editUserEnable boolean value
  handleEditUserEnable(editable) {
    this.setState({ editUserEnable: editable });
  }

  onSuspend() {
    const id = this.props.userInfo.id;
    var suspended = this.props.userInfo.suspended;
    const data = { id, suspended };
    this.props.suspendUser(data);
    this.setState({ suspendedState: true });
  }

  onUnsuspend() {
    const id = this.props.userInfo.id;
    const admin = sessionStorage.getItem("isAdmin");
    var suspended = this.props.userInfo.suspended;
    const data = { id, suspended };
    this.props.unsuspendUser(data);
    this.setState({ suspendedState: false });
  }

  onDelete() {
    const id = this.props.match.params.id || sessionStorage.getItem("userId");
    alert(id);
    alert('Button Clicked!')
    {/*this.props.deleteUser(id);*/}
   
  }

  renderBlockConnection() {
    if (this.props.userInfo.id == userId) {
      return (
        <label>
          <input
            type="checkbox"
            defaultChecked={this.props.userInfo.block_connection_requests}
            onClick={this.onBlockConnection.bind(this)}
          />
          Block Incomming Connection Requests
        </label>
      );
    }
  }

  //UNSUSPEND

  suspendUserButton() {
    const suspended = this.props.userInfo.suspended;
    const admin = sessionStorage.getItem("isAdmin");
    if (this.state.suspendedState) {
      return (
        <button
          className="btn btn-warning"
          onClick={this.onUnsuspend.bind(this)}
        >
          {" "}
          Unsuspend{" "}
        </button>
      );
    }
    return (
      <button className="btn btn-warning" onClick={this.onSuspend.bind(this)}>
        {" "}
        Suspend{" "}
      </button>
    );
  }

  deleteUserButton() {
    const admin = sessionStorage.getItem("isAdmin");
    const superuser = this.props.userInfo.superuser;
    
    console.log(superuser);
    {/*if superuser's value is false render deleleteUser button.*/}
    if(superuser === false) {
      return (
        <a href="/message">
          <button className="btn btn-danger" onClick={this.onDelete.bind(this)}>
            Delete User
          </button>
        </a>
      );
    }
  }

  renderConnection() {
    if (this.props.userInfo.id == userId) {
      return <div />;
    } else if (this.props.status.status === true) {
      return <div>Connected</div>;
    } else if (this.props.status.status === false) {
      return <div>Request Pending...</div>;
    } else if (this.props.userInfo.block_connection_requests === true) {
      return (
        <div>This user is not currently accepting connection requests</div>
      );
    } else if (_.isEmpty(this.props.status)) {
      return (
        <button className="btn btn-primary" type="button" onClick={this.onPress.bind(this)}>
          Connect
        </button>
      );
    }
  }

  renderPageContent() {
    const { userInfo, history } = this.props;
    if (this.state.editUserEnable) {
      return (
        <EditPage
          editable={this.handleEditUserEnable.bind(this)}
          history={history}
          userInfo={userInfo}
        />
      );
    }

    return (
      <div>
        <div className="feed-post-bar">
          <div className="wrap">
            <div className="search">
              <input
                type="text"
                className="searchTerm"
                placeholder="What's New?"
                onChange={event =>
                  this.props.userWallInputChange(event.target.value)
                }
                value={this.props.userWallPost}
              />
              <div className="post-button">
                <button
                  className="btn btn-default"
                  onClick={this.onPost.bind(this)}
                >
                  POST
                </button>
              </div>
            </div>
          </div>
        </div>
        <ProfileFeed feeds={this.props.userFeeds} />
      </div>
    );
  }

  render() {
    const {
      userInfo,
      userConnections,
      userFeeds,
      status,
      match,
      history,
      notifications
    } = this.props;
    return (
      <div>
        <Navbar history={history} notifications={notifications} />
        <LeftGraySideBar>
          <UserInfo
            userInfo={userInfo}
            adminUser={adminUser}
            url={match.url}
            editButtonClicked={this.onUserEditButton}
          />{" "}
          {this.renderBlockConnection()}
          {this.renderConnection()}
          <div id="profile-buttons">
            {this.renderEditUserButton()}
            {this.suspendUserButton()}
            {this.deleteUserButton()}
            
            
          </div>
        </LeftGraySideBar>
        <RightGraySideBar>
          <ProfileConnections connections={userConnections}/>
        </RightGraySideBar>
        <PageContent history={history}>
          {this.renderPageContent()}
        </PageContent>
      </div>
    );
  }
}

const mapStateToProps = state => {
  const {
    userInfo,
    userFeeds,
    notifications,
    userConnections,
    status,
    userWallPost,
    editUser
  } = state;

  return {
    userInfo,
    notifications,
    userFeeds,
    userConnections,
    status,
    userWallPost,
    editUser
  };
};
export default connect(
  mapStateToProps,
  {
    fetchUserInfo,
    fetchUserFeeds,
    fetchNotifications,
    fetchUserConnections,
    createConnectionRequest,
    fetchConnectionStatus,
    userWallInputChange,
    createPostOnUserWall,
    blockConnectionRequests,
    editUser,
    suspendUser,
    unsuspendUser,
    deleteUser
  }
)(ProfilePage);
