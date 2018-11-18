import React, { Component } from "react";
import { connect } from "react-redux";
import {
  fetchNotifications,
  fetchPendingUserConnections,
  fetchUserConnections,
  fetchUserInfo,
  fetchPendingUserInvites
} from "../actions";
import Navbar from "../common/Navbar";
import { LeftGraySideBar, RightGraySideBar } from "../common";
import UnreadNotifications from "./components/UnreadNotifications";
import UserInfo from "../FeedPage/components/UserInfo";
import Messages from "../FeedPage/components/Messages";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rerender: false
    };
  }

  componentDidMount() {
    const valid = sessionStorage.getItem("confirmed");
    if (valid === "null" || !valid) {
      this.props.history.push("/");
    }
    const {
      fetchUserInfo,
      fetchNotifications,
      fetchUserConnections,
      fetchPendingUserConnections
    } = this.props;
    fetchUserInfo(sessionStorage.getItem("userId"));
    fetchPendingUserConnections(sessionStorage.getItem("userId"));
    fetchNotifications(sessionStorage.getItem("userId"));
    fetchUserConnections(sessionStorage.getItem("userId"));
    fetchPendingUserInvites(sessionStorage.getItem("userId"));
  }

  render() {
    const {
      userInfo,
      userConnections,
      notifications,
      receivedConnectionRequest,
      userInvites
    } = this.props;
    return (
      <div>
        <Navbar history={this.props.history} notifications={notifications} />
        <UnreadNotifications
          notifications={notifications}
          userConnections={userConnections}
          connections={receivedConnectionRequest}
        />
        <RightGraySideBar>
          <Messages
            connections={receivedConnectionRequest}
            invites={userInvites}
          />
        </RightGraySideBar>
        <LeftGraySideBar>
          <UserInfo userInfo={userInfo} userConnections={userConnections} />
        </LeftGraySideBar>
      </div>
      
    );
  }
}

const mapStateToProps = state => {
  const {
    userInfo,
    notifications,
    userConnections,
    receivedConnectionRequest,
    userWallPost,
    userInvites
  } = state;
  return {
    userInfo,
    notifications,
    userConnections,
    receivedConnectionRequest,
    userWallPost,
    userInvites
  };
};
export default connect(
  mapStateToProps,
  {
    fetchUserInfo,
    fetchUserConnections,
    fetchPendingUserConnections,
    fetchNotifications,
    fetchPendingUserInvites
  }
)(Notification);
