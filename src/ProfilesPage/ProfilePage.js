import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Link } from 'react-router-dom';
import _ from 'lodash';
import {
  fetchUserInfo,
  fetchUserFeeds,
  fetchUserConnections,
  createConnectionRequest,
  fetchConnectionStatus,
  userWallInputChange,
  createPostOnUserWall,
  blockConnectionRequests,
  suspendUser,
  unsuspendUser,
  deleteUser,
  editUser,
  fetchBlockedUsers,
  createBlock
} from '../actions';
import {LeftGraySideBar, RightGraySideBar, PageContent} from '../common';
import Navbar from '../common/Navbar';
import UserInfo from './components/UserInfo';
import ProfileConnections from './components/ProfileConnections';
import ProfileFeed from './components/ProfileFeed';
import EditPage from '../EditPage/EditPage';

const userId = parseInt(sessionStorage.getItem('userId'));
const adminUser = sessionStorage.getItem('adminUser');
const admin = sessionStorage.getItem('isAdmin');
// var editButtonClicked = false;

class ProfilePage extends Component {
  componentWillMount() {
    this.setState({blockedUsersReceived: false});
    const sender_id = sessionStorage.getItem('userId');
    const receiver_id = this.props.match.params.id;
    const { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchBlockedUsers} = this.props;
    this.props.fetchUserInfo(this.props.match.params.id);
    this.props.fetchUserFeeds(this.props.match.params.id);
    this.props.fetchUserConnections(this.props.match.params.id);
    this.props.fetchConnectionStatus({ sender_id, receiver_id });
    this.props.fetchBlockedUsers(userId).then(() => {this.setState({blockedUsersReceived: true})});
    this.setState(() => {
      return {suspendedState: this.props.userInfo.suspended}
    });
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
    //Toggle the editUser function enable or not enable
    this.setState(prevState => ({
      editUserEnable: !prevState.editUserEnable
    }));
  }

  //This is to be passed to child components to update
  //the state of editUserEnable boolean value
  handleEditUserEnable(editable) {
    this.setState({editUserEnable: editable});
  }

  onSuspend() {
    const id = this.props.userInfo.id
    var suspended = this.props.userInfo.suspended
    const data = { id, suspended }
    this.props.suspendUser(data)
    this.setState({suspendedState: true});
  }

  onUnsuspend() {
    const id = this.props.userInfo.id
    const admin = sessionStorage.getItem('isAdmin')
    var suspended = this.props.userInfo.suspended
    const data = { id, suspended }
    this.props.unsuspendUser(data);
    this.setState({suspendedState: false})
  }

  onDelete() {
    const id = this.props.match.params.id || sessionStorage.getItem('userId');
    this.props.deleteUser(id);
    console.log(id);
  }

  onBlockUser() {
    // save the id as sender_id of the user who blocks AND 
    // the id as receiver_id of the block to the user_blocks db table
    const blocker_id = userId;
    const blocked_id = this.props.userInfo.id;
    console.log("block clicked");
    this.props.createBlock( blocker_id, blocked_id);
  }

  onUnblockUser() {
    // delete from user_blocks db table the row with 
    // corresponding sender_id and receiver_id
  }

  blockUserButton() {
    if (this.props.userInfo.id !== parseInt(userId)) {
      return <button className="btn btn-warning" onClick={this.onBlockUser.bind(this)}>Block</button>
    }
  }

  renderBlockConnection() {
    if (this.props.userInfo.id == userId) {
      return <label>
        <input type="checkbox" defaultChecked={this.props.userInfo.block_connection_requests} onClick={this.onBlockConnection.bind(this)}/>
        Block Incoming Connection Requests
      </label>
    }
  }

  //UNSUSPEND

  suspendUserButton() {
    const suspended = this.props.userInfo.suspended
    const admin = sessionStorage.getItem('isAdmin')
      if (this.state.suspendedState) {
        return <button className="btn btn-warning" onClick={this.onUnsuspend.bind(this)}> Unsuspend </button>
        }
        return <button className="btn btn-warning" onClick={this.onSuspend.bind(this)}> Suspend </button>
      }

  deleteUserButton() {
    const admin = sessionStorage.getItem('isAdmin')
    return <a href = {process.env.REACT_APP_API_URL_QA + 'message'}><button className="btn btn-danger"  onClick={this.onDelete.bind(this)}>Delete User</button></a>
  }

  renderConnection() {

    if (this.state.blockedUsersReceived) {
    if (this.props.userInfo.id == userId) {
      return <div></div>
    } else if (this.props.status.status === true) {
      return <div>
        <p>Connected</p>
      </div>
    } else if (this.props.status.status === false) {
      return <div>Request Pending...</div>
    } else if (this.props.userInfo.block_connection_requests === true) {
      return <div>This user is currently not accepting connection requests</div>
    } else if (this.props.userBlocksIds.includes(this.props.userInfo.id)) {
      return <div></div>
    } else if ( _.isEmpty(this.props.status) && this.props.userBlocksIds !== undefined ) {
      return <button type="button" onClick={this.onPress.bind(this)}>Connectmmmmmmmmmmmmm</button>
    } }
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
    const {userInfo, userConnections, userFeeds, status, match, userBlocksIds} = this.props;
    return (<div>
      <Navbar history={this.props.history} />
      <LeftGraySideBar>
        <UserInfo userInfo={userInfo} adminUser={adminUser} url={match.url} editButtonClicked={this.onUserEditButton}/> 
        {this.renderBlockConnection()}
        {this.renderConnection()}
        {this.renderEditUserButton()}
        {this.suspendUserButton()}
        {this.deleteUserButton()}
        <Link to="/feed">
          {this.blockUserButton()}
        </Link>
        {/* <BlockedUsersList/> */}
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
    userConnections,
    status,
    userWallPost, 
    editUser,
    userBlocks,
    userBlocksIds = userBlocks.map(a => a.id)
  } = state;

  return {
    userInfo, 
    userFeeds, 
    userConnections, 
    status, 
    userWallPost, 
    editUser,
    userBlocks,
    userBlocksIds
  };
}
export default connect(mapStateToProps, {
  fetchUserInfo, 
  fetchUserFeeds, 
  fetchUserConnections, 
  createConnectionRequest,
  fetchConnectionStatus, 
  userWallInputChange, 
  createPostOnUserWall, 
  blockConnectionRequests,
  editUser, 
  suspendUser, 
  unsuspendUser, 
  deleteUser,
  fetchBlockedUsers,
  createBlock
})(ProfilePage);
