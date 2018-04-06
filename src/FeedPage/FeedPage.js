import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    createPostOnUserWall,
    fetchNotifications,
    fetchPendingUserConnections,
    fetchUserConnections,
    fetchUserFeeds,
    fetchUserInfo,
    userWallInputChange
} from '../actions';
import Navbar from '../common/Navbar';
import {LeftGraySideBar, PageContent, RightGraySideBar} from '../common';

import NewFeeds from './components/NewFeeds';
import UserInfo from './components/UserInfo';
import Messages from './components/Messages';


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
    const userId = sessionStorage.getItem('userId');
    this.props.fetchUserInfo(userId);
    this.props.fetchUserFeeds(userId);
    this.props.fetchUserConnections(userId);
    this.props.fetchPendingUserConnections(userId);
    this.props.fetchNotifications(userId);
  }

  onPost() {
    const body = this.props.userWallPost;

    const userId = this.props.match.params.id || sessionStorage.getItem('userId');
    const authorId = sessionStorage.getItem('userId');
    this.props.createPostOnUserWall({ body, userId, authorId }, this.props.fetchUserFeeds);
  }

  render() {
    const { userInfo, userConnections, userFeeds, receivedConnectionRequest, notifications } = this.props;
    return (
      <div>
        <Navbar history={this.props.history} notifications={notifications}/>
        <RightGraySideBar>
          <Messages connections={receivedConnectionRequest} />
        </RightGraySideBar>
        <LeftGraySideBar>
          <UserInfo userInfo={userInfo} userConnections={userConnections}  />
        </LeftGraySideBar>
        <PageContent>
          <div className="feed-post-bar">
            <div className="wrap">

              <div className="search">
                <input type="text" className="searchTerm" placeholder="What's New?"
                  onChange={(event) => this.props.userWallInputChange(event.target.value)}
                  value={this.props.userWallPost}
                />
                <div className="post-button"><button className="btn btn-default" onClick={this.onPost.bind(this)}>POST</button></div>
              </div>
            </div>
          </div>
          <NewFeeds userFeeds={userFeeds} />
        </PageContent>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { userInfo, userFeeds, userConnections,  receivedConnectionRequest, userWallPost, notifications } = state;
  return { userInfo, userFeeds, userConnections, receivedConnectionRequest, userWallPost, notifications };
}
export default connect(mapStateToProps,
  {
    fetchUserInfo,
    fetchUserFeeds,
    fetchUserConnections,
      fetchNotifications,
    fetchPendingUserConnections,
    createPostOnUserWall,
    userWallInputChange
  }
)(Feed);
