import React, { Component } from "react";
import { connect } from "react-redux";
import { resolve } from "url";
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


class ProfilePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      deleteModalVisible: false
    };
  }


  componentDidMount() {
    const valid = sessionStorage.getItem('confirmed');
    if (valid === 'null' || !valid) {
      this.props.history.push('/');
    }
    this.setState(() => {
      return { suspendedState: this.props.userInfo.suspended }
    });

    this.setState({editUserEnable: false});
    this.loadUserData(this.props.match.params.id);
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.currentUser === nextProps.match.params.id) {
      return;
    }
    this.loadUserData(nextProps.match.params.id);
  }

  loadUserData(userId) {
    this.setState({currentUser: userId})
    const sender_id = sessionStorage.getItem('userId');
    const { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchConnectionStatus, fetchNotifications } = this.props;
    fetchUserInfo(userId);
    fetchUserFeeds(userId);
    fetchUserConnections(userId);
    fetchConnectionStatus({ sender_id, userId });
    fetchNotifications(sender_id);
  }

  // @TODO onPress what? Be more specific naming functions
  onPress() {
    const sender_id = sessionStorage.getItem("userId");
    const receiver_id = this.state.currentUser;
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

<<<<<<< HEAD
=======


>>>>>>> adminCSS
  renderEditUserButton() {
    return (
      <button className="btn btn-info" onClick={this.handleEditButtonClick.bind(this)}>
        {this.state.editUserEnable ? "Back" : "Edit"}
      </button>
    );
  }

  renderPublicFigureStatus(userInfo = this.props.userInfo) {
    if (userInfo.public_figure) {
      return (
        <h6>Public Figure</h6>
      );
    }
  }

  renderIsMentorStatus(userInfo = this.props.userInfo) {
    if (userInfo.is_mentor) {
      return (
        <h6>Mentor</h6>
      );
    }
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
  onDelete() {
    const id = this.state.currentUser || sessionStorage.getItem("userId");
    this.props.deleteUser(id);
    this.props.history.push('/message');

  }

  openModal() {
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
    } else {
      return (
        <button className="btn btn-warning" onClick={this.onSuspend.bind(this)}>
          {" "}
          Suspend{" "}
        </button>
      );
    }
  }

  closeModal = () => {
    this.setState({ deleteModalVisible: false });
  };


  deleteUserButton() {
    const admin = sessionStorage.getItem("isAdmin");
    if (!this.props.userInfo.superuser) {
      return (
        <button className="btn btn-danger" onClick={this.openModal.bind(this)}>
          Delete User
          </button>
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
    const { deleteModalVisible } = this.state
    return (
      <div>
        <Navbar history={history} notifications={notifications} />
        <LeftGraySideBar>
          {this.renderPublicFigureStatus()}
          {this.renderIsMentorStatus()}
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
            {deleteModalVisible &&
              <Modal style={{ borderRadius: "50px" }} open={this.state.deleteModalVisible} onClose={this.closeModal} center>
                <h1 className='text-center font-weight-bold'>This user will be deleted.</h1>
                <h2 className='text-center'>Are you sure?</h2>
                <hr />
                <div className='container'>
                  <div className='row'>
                    <div className='col-md-6'>
                      <button className="btn btn-danger" onClick={this.onDelete}>Yes</button>
                    </div>
                    <div className='col-md-6'>
                      <button className="btn btn-danger" onClick={this.closeModal}>No</button>
                    </div>
                  </div>
                </div>
              </Modal>}
          </div>
        </LeftGraySideBar>
        <RightGraySideBar>
          <ProfileConnections connections={userConnections} />
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
