import React, { Component } from "react";
import { AutoComplete, FlatButton, Menu, MenuItem, Popover } from "material-ui";
import ArrowDropRight from "material-ui/svg-icons/navigation-arrow-drop-right";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import {
  fetchAllUsers,
  fetchConnectionStatus,
  fetchBlockedUsers,
  fetchNotifications,
  fetchUserConnections,
  fetchUserFeeds,
  fetchUserInfo,
  filterUsers
} from "../actions";
import axios from "axios";
import { render } from "react-router-dom";
import "./css/navbar.css";
import NotificationButton from "../containers/notification_button";
import "../images/Women_Logo_New.png";

const userId = parseInt(sessionStorage.getItem("userId"));

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUsers: false,
      open: false
    };
    this.handleRequestClose = this.handleRequestClose.bind(this);
    this.handleTouchTap = this.handleTouchTap.bind(this);
    this.makeUpdate = this.makeUpdate.bind(this);
  }

  Logout() {
    axios
      .get(process.env.REACT_APP_API_URL_DEV + "sessions/sign_out")
      .then(response => {
        sessionStorage.setItem("confirmed", null);
        sessionStorage.setItem("userId", null);
        this.props.history.push("/");
      });
  }

  componentDidMount() {
    const { fetchAllUsers, fetchBlockedUsers, fetchUserInfo, fetchNotifications } = this.props;
    fetchAllUsers();
    fetchUserInfo(userId);
  }

  componentDidUpdate(prevProps, nextProps) {
    if (this.props.users !== prevProps.users) {
      this.renderSearch(this.props.users);
    }
  }

  makeUpdate() {
    console.log("you're in makeUpdate");
    this.props.fetchAllUsers();
  }

  renderSearch(users) {
    return (
      <AutoComplete
        filter={AutoComplete.fuzzyFilter}
        dataSource={this.props.users}
        maxSearchResults={10}
        hintText="Search"
        underlineShow={false}
        onClick={this.makeUpdate}
        hintStyle={styles.hint}
        inputStyle={styles.input}
        textareaStyle={styles.text}
        onNewRequest={item => this.onItemClicked(item)}
      />
    );
  }

  handleTouchTap(event) {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({ open: true, anchorEl: event.currentTarget });
  }

  onMenuItemClicked(event, menuItem) {
    let { name, primaryText } = menuItem.props;
    this.props.filterUsers(name, primaryText);
  }

  onMenuClicked(event, value) {}

  handleRequestClose() {
    this.setState({ open: false });
  }

  onItemClicked(item) {
    const {
      fetchUserInfo,
      fetchUserFeeds,
      fetchUserConnections,
      fetchConnectionStatus,
      fetchBlockedUsers
    } = this.props;    
    const sender_id = sessionStorage.getItem("userId");
    const receiver_id = item.value;
    fetchBlockedUsers(sender_id);
    fetchUserInfo(item.value);
    fetchUserFeeds(item.value);
    fetchUserConnections(item.value);
    fetchConnectionStatus({ sender_id, receiver_id });
    this.props.history.push(`/profile/${item.value}`);
  }

  componentWillReceiveProps(newProps) {
    const { userInfo } = newProps;
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
    const locationMenuItems = [
      {
        primaryText: "San Francisco",
        name: "city"
      },
      {
        primaryText: "Chicago",
        name: "city"
      },
      {
        primaryText: "Oakland",
        name: "city"
      },
      {
        primaryText: "Bay Area",
        name: "city"
      }
    ];

    const trainingMenuItems = [
      {
        primaryText: "less than 1 year",
        name: "training"
      },
      {
        primaryText: "1-3 years",
        name: "training"
      },
      {
        primaryText: "4-7 years",
        name: "training"
      },
      {
        primaryText: "7-10 years",
        name: "training"
      },
      {
        primaryText: "11+ years",
        name: "training"
      }
    ];

    const experienceMenuItems = [
      {
        primaryText: "less than 1 year",
        name: "experience"
      },
      {
        primaryText: "1-3 years",
        name: "experience"
      },
      {
        primaryText: "4-7 years",
        name: "experience"
      },
      {
        primaryText: "7-10 years",
        name: "experience"
      },
      {
        primaryText: "11+ years",
        name: "experience"
      }
    ];

    const genderMenuItems = [
      {
        primaryText: "Male",
        name: "gender"
      },
      {
        primaryText: "Female",
        name: "gender"
      }
    ];

    const { notifications } = this.props;

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link id="nav-header" className="navbar-brand" to="/feed">
              Women in Comedy
            </Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <form className="navbar-form">
                <div className="input-group" style={styles.container}>
                  <div>
                    <FlatButton
                      style={styles.filter}
                      onClick={this.handleTouchTap}
                      label="Filter"
                    />
                    <Popover
                      open={this.state.open}
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{
                        horizontal: "left",
                        vertical: "bottom"
                      }}
                      targetOrigin={{
                        horizontal: "left",
                        vertical: "top"
                      }}
                      onRequestClose={this.handleRequestClose}
                    >
                      <Menu onChange={this.onMenuClicked}>
                        <MenuItem
                          primaryText="Reset"
                          onClick={event =>
                            this.onMenuItemClicked(event, { props: "none" })
                          }
                        />
                        <MenuItem
                          primaryText="Location"
                          rightIcon={<ArrowDropRight />}
                          menuItems={locationMenuItems.map(menuItem => (
                            <MenuItem
                              {...menuItem}
                              onClick={event =>
                                this.onMenuItemClicked(event, {
                                  props: { ...menuItem }
                                })
                              }
                            />
                          ))}
                        />
                        <MenuItem
                          primaryText="Training"
                          rightIcon={<ArrowDropRight />}
                          menuItems={trainingMenuItems.map(menuItem => (
                            <MenuItem
                              {...menuItem}
                              onClick={event =>
                                this.onMenuItemClicked(event, {
                                  props: { ...menuItem }
                                })
                              }
                            />
                          ))}
                        />
                        <MenuItem
                          primaryText="Experience"
                          rightIcon={<ArrowDropRight />}
                          menuItems={experienceMenuItems.map(menuItem => (
                            <MenuItem
                              {...menuItem}
                              onClick={event =>
                                this.onMenuItemClicked(event, {
                                  props: { ...menuItem }
                                })
                              }
                            />
                          ))}
                        />
                        <MenuItem
                          primaryText="Gender"
                          rightIcon={<ArrowDropRight />}
                          menuItems={genderMenuItems.map(menuItem => (
                            <MenuItem
                              {...menuItem}
                              onClick={event =>
                                this.onMenuItemClicked(event, {
                                  props: { ...menuItem }
                                })
                              }
                            />
                          ))}
                        />
                      </Menu>
                    </Popover>
                  </div>
                </div>
                <div className="input-group">
                {this.renderSearch(this.props.users)}
                  <i
                    className="glyphicon glyphicon-search"
                    style={{ right: "50px" }}
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
                <img
                  className="img-responsive"
                  src="https://u.o0bc.com/avatars/no-user-image.gif"
                  alt=""
                />
              </Link>
            </li>
            <li>
              <a href="#" className="icon" onClick={this.Logout.bind(this)}>
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
    borderRadius: "20px"
  },
  hint: {
    zIndex: 1,
    marginBottom: "7px",
    marginLeft: "10px"
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
    fetchBlockedUsers,
    fetchConnectionStatus,
    fetchNotifications,
    fetchUserConnections,
    filterUsers
  }
)(Navbar);
