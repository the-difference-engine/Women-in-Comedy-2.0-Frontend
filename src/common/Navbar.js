import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAllUsers,
  fetchConnectionStatus,
  fetchNotifications,
  fetchUserConnections,
  fetchUserFeeds,
  fetchUserInfo,
  filterUsers
} from "../actions";
import axios from "axios";
import "./css/navbar.css";
import NotificationButton from "../containers/notification_button";
import "../images/Women_Logo_New.png";
import {SearchBar} from "./SearchBar.js";

const userId = sessionStorage.getItem("userId");

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: false,
      open: false
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
  }

  logout() {
    axios.get(process.env.REACT_APP_API_ENDPOINT + 'sessions/sign_out').then(() => {
      sessionStorage.clear();
      this.props.history.push('/')
    });
  };

  componentDidMount() {
    const { fetchAllUsers, fetchUserInfo } = this.props;
    fetchAllUsers();
    fetchUserInfo(userId);
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({ open: true, anchorEl: event.currentTarget });
  }

  onMenuItemClicked(menuItem) {
    let { name, primaryText } = menuItem.props;
    this.props.filterUsers(name, primaryText);
  }

  onMenuClicked() {}

  handleRequestClose() {
    this.setState({ open: false });
  }

  onItemClicked(item) {
    const sender_id = sessionStorage.getItem("userId");
    const receiver_id = item.value;
    fetchUserInfo(item.value);
    fetchUserFeeds(item.value);
    fetchUserConnections(item.value);
    fetchConnectionStatus({ sender_id, receiver_id });
    this.props.history.push(`/profile/${item.value}`);
  }

  renderAdminIcon() {
    const isAdmin = this.props.userInfo.admin;
    if (isAdmin) {
      return (
        <li>
          <Link to="/admins">
            <i className="fa fa-users">
              <p>ADMIN</p>
            </i>
          </Link>
        </li>
      );
    }
  }

  render() {
    const { userInfo, notifications } = this.props;

    return (
      <nav className="navbar navbar-default navbar-fixed-top" style={{height: 90}}>
        <div className="container-fluid">
          <div className="navbar-header">
            <Link id="nav-header" className="navbar-brand" to="/feed">
              Women in Comedy
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <form className="navbar-form">
                <div className="input-group">
                 <SearchBar
                 inputStyle={styles.input}
                /> 
                  <i
                    className="glyphicon glyphicon-search"
                    style={{ right: "20px" }}
                  />
                </div>
              </form>
            </li>
            <li>
              <Link to="/feed">
                <i className="fa fa-home">
                  <p>HOME</p>
                </i>
              </Link>
            </li>
            <li>
              <Link to="/events">
                <i className="fa fa-calendar-o">
                  <p>EVENTS</p>
                </i>
              </Link>
            </li>

            {this.renderAdminIcon()}

            <li>
              <NotificationButton notifications={notifications} />
            </li>
            <li>
              <Link to={`/profile/${userId}`}>
                <i className="fa fa-user">
                  <p>PROFILE</p>
                </i>
                {/* {userInfo.photo != undefined && 
                  <img id="img-responsive"
                  src={userInfo.photo}
                  alt="" />
                }
                {userInfo.photo == undefined && 
                  <img id="img-responsive"
                  src="https://u.o0bc.com/avatars/no-user-image.gif"
                  alt="" />
                } */}
                {/* <img
                  className="img-responsive"
                  src="https://u.o0bc.com/avatars/no-user-image.gif"
                  alt=""
                /> */}
              </Link>
            </li>
            <li>
              <a href="#" className="icon" onClick={this.logout.bind(this)}>
                <i className="fa fa-sign-out">
                  <p>LOG OUT</p>
                </i>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

const styles = {
  container: {
    verticalAlign: "top",
    height: "30px"
  },
  filter: {
    height: "30px",
    textTransform: "none",
    backgroundColor: "white",
    borderRadius: "20px"
  },
  input: {
    height: "30px",
    width: "225px",
    backgroundColor: "white",
    borderRadius: "40px"
  },
  hint: {
    zIndex: 1,
    marginBottom: "7px",
    marginLeft: "20px"
  },
  text: {
    marginLeft: "10px"
  }
};

function mapStateToProps({ allUsers, userInfo }) {
  const { filterUserList } = allUsers;
  const users = filterUserList.map(user => {
    return { text: `${user.firstName} ${user.lastName}`, value: user.id };
  });

  return { users, userInfo };
}

export default connect(
  mapStateToProps,
  {
    fetchAllUsers,
    fetchUserInfo,
    fetchUserFeeds,
    fetchConnectionStatus,
    fetchNotifications,
    fetchUserConnections,
    filterUsers
  }
)(Navbar);
