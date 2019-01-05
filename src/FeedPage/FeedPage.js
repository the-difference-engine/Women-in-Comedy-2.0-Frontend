import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  fetchUserInfo,
  fetchUserFeeds,
  fetchNotifications,
  fetchUserConnections,
  fetchPendingUserConnections,
  fetchPendingUserInvites,
  createPostOnUserWall,
  userWallInputChange
} from '../actions';
import Navbar from '../common/Navbar';
import {LeftGraySideBar, PageContent, RightGraySideBar} from '../common';

import NewFeeds from './components/NewFeeds';
import UserInfo from './components/UserInfo';
import Messages from './components/Messages';
import renderPendingInvites from './components/Messages';


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { rerender: false };
  }

  componentDidMount() {
    const valid = sessionStorage.getItem('confirmed');
    if(valid === 'null' || !valid) {
      this.props.history.push('/');
    }
    const { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchPendingUserConnections, fetchPendingUserInvites, fetchNotifications } = this.props;
    fetchUserInfo(sessionStorage.getItem('userId'));
    fetchUserFeeds(sessionStorage.getItem('userId'));
    fetchUserConnections(sessionStorage.getItem('userId'));
    fetchPendingUserConnections(sessionStorage.getItem('userId'));
    fetchPendingUserInvites(sessionStorage.getItem('userId'));
    fetchNotifications(sessionStorage.getItem('userId'));
  }

  onPost() {
    const body = this.props.userWallPost;

    const userId = this.props.match.params.id || sessionStorage.getItem('userId');
    const authorId = sessionStorage.getItem('userId');
    this.props.createPostOnUserWall({ body, userId, authorId }, this.props.fetchUserFeeds);
  }

  render() {
    const { userInfo, userConnections, userFeeds, userInvites, receivedConnectionRequest, notifications } = this.props;

    return (
      <div>
        <Navbar history={this.props.history} notifications={notifications}/>
        <RightGraySideBar>
          <Messages connections={receivedConnectionRequest} invites={userInvites} />
        </RightGraySideBar>
        <LeftGraySideBar>
          <UserInfo userInfo={userInfo} userConnections={userConnections} />
        </LeftGraySideBar>
        <PageContent>
        </PageContent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { userInfo, userFeeds, userConnections, userInvites, receivedConnectionRequest, userWallPost, notifications } = state;
  return { userInfo, userFeeds, userConnections, userInvites, receivedConnectionRequest, userWallPost, notifications };
}
export default connect(mapStateToProps,
  {
    fetchUserInfo,
    fetchUserFeeds,
    fetchUserConnections,
    fetchNotifications,
    fetchPendingUserConnections,
    fetchPendingUserInvites,
    createPostOnUserWall,
    userWallInputChange
  }
)(Feed);
