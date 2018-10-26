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
import Modal from 'react-responsive-modal';


const userId = sessionStorage.getItem("userId");
const adminUser = sessionStorage.getItem("adminUser");
const admin = sessionStorage.getItem("isAdmin");
// var editButtonClicked = false;

const modStyle = {
  borderRadius: '25px',
};

class ProfilePage extends Component {
  state = {
    deleteModalVisible: false
  }

  /**
   * @TODO componentWillMount is a deprecated lifecycle method and will be removed.
   * @TODO Please refactor this to use componentDidMount
   */
  componentWillMount() {
    const valid = sessionStorage.getItem('confirmed');
    if(valid === 'null' || !valid) {
      this.props.history.push('/');
    }
    const sender_id = sessionStorage.getItem('userId');
    const receiver_id = this.props.match.params.id;
    const { fetchUserInfo, fetchUserFeeds, fetchUserConnections } = this.props;
    this.props.fetchUserInfo(this.props.match.params.id);
    this.props.fetchUserFeeds(this.props.match.params.id);
    this.props.fetchUserConnections(this.props.match.params.id);
    this.props.fetchConnectionStatus({ sender_id, receiver_id });
    this.props.fetchNotifications(sender_id);
    this.setState(() => {
      return {suspendedState: this.props.userInfo.suspended}
    });
    this.setState({editUserEnable: false});
  }

  // @TODO onPress what? Be more specific naming functions
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
    return (
      <button className="btn btn-info" onClick={this.handleEditButtonClick.bind(this)}>
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

  // @TODO onSuspend what? Please be more specific naming functions
  onSuspend() {
    const id = this.props.userInfo.id;
    var suspended = this.props.userInfo.suspended;
    const data = { id, suspended };
    this.props.suspendUser(data);
    this.setState({ suspendedState: true });
  }

  // @TODO onUnsuspend what? Please be more specific naming functions
  onUnsuspend() {
    const id = this.props.userInfo.id;
    const admin = sessionStorage.getItem("isAdmin");
    var suspended = this.props.userInfo.suspended;
    const data = { id, suspended };
    this.props.unsuspendUser(data);
    this.setState({ suspendedState: false });
  }

  // @TODO What are we deleting? Please be more specific naming functions
  onDelete = () => {
    const id = this.props.match.params.id || sessionStorage.getItem("userId");
    this.props.deleteUser(id);
    window.location.href='/message';

  }

  openModal () {
    this.setState({ deleteModalVisible: true })
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

  onCloseModal = () => {
    this.setState({ deleteModalVisible: false });
  };


  deleteUserButton() {
    console.log(this.state)
    const admin = sessionStorage.getItem("isAdmin");
    return (
        <button className="btn btn-danger" onClick={this.openModal.bind(this)}>
          Delete User
        </button>
    );
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
      notifications
    } = this.props;
    const { deleteModalVisible } = this.state
    return (
      <div>
        <Navbar history={this.props.history} notifications={notifications} />
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
            {deleteModalVisible && <Modal style={{borderRadius:"50px"}} open={this.state.deleteModalVisible} onClose={this.onCloseModal} center>
          <h1 className='text-center font-weight-bold'>This user will be delted.</h1>
          <h2 className='text-center'>Are you sure?</h2>
          <hr/>
          <div className='container'>
          <div className='row'>
          <div className='col-md-6'>
          <button className="btn btn-danger" onClick={this.onDelete}>Yup</button>
          </div>
          <div className='col-md-6'>
          <button className="btn btn-danger" onClick={this.onCloseModal}>Nope</button>
          </div>

          </div>
          </div>
        </Modal>}
          </div>
        </LeftGraySideBar>
        <RightGraySideBar>
          <ProfileConnections connections={this.props.userConnections} />
        </RightGraySideBar>
        <PageContent history={this.props.history}>
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
