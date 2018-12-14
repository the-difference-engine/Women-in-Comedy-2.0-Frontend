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
      <div className="container">
        <div className="row">
          <div className='col-sm-12'>
            <div className="row">
              <div className="col-lg-12">
                <Navbar history={this.props.history} notifications={notifications}/>
              </div>
            </div>
            <div className="row notif-col-container">
              <div className="col-lg-3">
                <RightGraySideBar>
                  <Messages connections={receivedConnectionRequest} invites={userInvites} />
                </RightGraySideBar>
              </div>
              <div className="col-lg-6">
                {/* <PageContent>
                <div className="feed-post-bar">
                  <div className="wrap">
                    <div className="search">
                      <input type="text" className="searchTerm" placeholder="What's New?"
                        onChange={(event) => this.props.userWallInputChange(event.target.value)}
                        value={this.props.userWallPost}/>
                      <div className="post-button"><button className="btn btn-default" onClick={this.onPost.bind(this)}>POST</button></div>
                    </div>
                  </div>
                </div>
                <NewFeeds userFeeds={userFeeds} />
              </PageContent> */}
              </div>
              <div className="col-lg-3">
                <LeftGraySideBar>
                  <UserInfo userInfo={userInfo} userConnections={userConnections} />
                </LeftGraySideBar>
              </div>
            </div>
          </div>
        </div>


        
        
        
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
