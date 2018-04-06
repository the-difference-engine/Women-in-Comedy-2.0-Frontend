import React, {Component} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';
import {
    blockConnectionRequests,
    createConnectionRequest,
    createPostOnUserWall,
    editUser,
    fetchConnectionStatus,
    fetchNotifications,
    fetchUserConnections,
    fetchUserFeeds,
    fetchUserInfo,
    userWallInputChange
} from '../actions';
import {LeftGraySideBar, PageContent, RightGraySideBar} from '../common';
import Navbar from '../common/Navbar';
import UserInfo from './components/UserInfo';
import ProfileConnections from './components/ProfileConnections';
import ProfileFeed from './components/ProfileFeed';
import EditPage from '../EditPage/EditPage'

const userId = sessionStorage.getItem('userId');
const adminUser = sessionStorage.getItem('adminUser');
// var editButtonClicked = false;

class ProfilePage extends Component {
  componentWillMount() {

    const sender_id = sessionStorage.getItem('userId');
    const receiver_id = this.props.match.params.id;
    this.props.fetchUserInfo(this.props.match.params.id);
    this.props.fetchUserFeeds(this.props.match.params.id);
    this.props.fetchUserConnections(this.props.match.params.id);
    this.props.fetchConnectionStatus({sender_id, receiver_id});
    this.props.fetchNotifications(sender_id);
    this.setState({editUserEnable: false});
  }

  onPress() {
    const sender_id = sessionStorage.getItem('userId');
    const receiver_id = this.props.match.params.id;
    const data = {
      sender_id,
      receiver_id
    }
    this.props.createConnectionRequest(data);
  }

  onBlockConnection() {
    const sender_id = sessionStorage.getItem('userId');
    this.props.blockConnectionRequests(sender_id);
  }

  onPost() {
    const body = this.props.userWallPost;
    const userId = this.props.match.params.id || sessionStorage.getItem('userId');
    const authorId = sessionStorage.getItem('userId');
    this.props.createPostOnUserWall({
      body,
      userId,
      authorId
    }, this.props.fetchUserFeeds);
  }

  renderEditUserButton() {
    return <button onClick={this.handleEditButtonClick.bind(this)}>
      {this.state.editUserEnable ? 'Back' : 'Edit'}
    </button>

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
    this.setState({editUserEnable: editable});
  }

  renderBlockConnection() {
    if (this.props.userInfo.id == userId) {
      return <label>
        <input type="checkbox" defaultChecked={this.props.userInfo.block_connection_requests} onClick={this.onBlockConnection.bind(this)}/>
        Block Incomming Connection Requests
      </label>
    }
  }

  renderConnection() {
    if (this.props.userInfo.id == userId) {
      return <div></div>
    } else if (this.props.status.status === true) {
      return <div>
        Connected
      </div>
    } else if (this.props.status.status === false) {
      return <div>
        Request Pending...</div>
    } else if (this.props.userInfo.block_connection_requests === true) {
      return <div>This user is not currently accepting connection requests</div>
    } else if (_.isEmpty(this.props.status)) {
      return <button type="button" onClick={this.onPress.bind(this)}>Connect</button>
    }
  }

  renderPageContent() {
    const {userInfo, history} = this.props;
    if (this.state.editUserEnable) {
      return <EditPage editable= {this.handleEditUserEnable.bind(this)} history={history} userInfo={userInfo}/>
    }

    return (<div>
      <div className="feed-post-bar">
        <div className="wrap">
          <div className="search">
            <input type="text" className="searchTerm" placeholder="What's New?" onChange={(event) => this.props.userWallInputChange(event.target.value)} value={this.props.userWallPost}/>
            <div className="post-button">
              <button className="btn btn-default" onClick={this.onPost.bind(this)}>POST</button>
            </div>
          </div>
        </div>
      </div>
      <ProfileFeed feeds={this.props.userFeeds}/>
    </div>)
  }

  render() {
    const {userInfo, match, notifications} = this.props;
    return (<div>
      <Navbar history={this.props.history}  notifications={notifications}/>
      <LeftGraySideBar>
        <UserInfo userInfo={userInfo} adminUser={adminUser} url={match.url} editButtonClicked={this.onUserEditButton}/> {this.renderBlockConnection()}
        {this.renderConnection()}
        {this.renderEditUserButton()}

      </LeftGraySideBar>
      <RightGraySideBar>
        <ProfileConnections connections={this.props.userConnections}/>
      </RightGraySideBar>
      <PageContent history={this.props.history}>
        {this.renderPageContent()}
      </PageContent>
    </div>);
  };
}

const mapStateToProps = (state) => {
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
}
export default connect(mapStateToProps, {
  fetchUserInfo,
  fetchUserFeeds,
    fetchNotifications,
  fetchUserConnections,
  createConnectionRequest,
  fetchConnectionStatus,
  userWallInputChange,
  createPostOnUserWall,
  blockConnectionRequests,
  editUser
})(ProfilePage);
