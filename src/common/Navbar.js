import React, { Component } from 'react';
import { AutoComplete } from 'material-ui';
import { FlatButton, Popover, Menu, MenuItem } from 'material-ui';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllUsers, fetchUserInfo, fetchUserFeeds, fetchConnectionStatus, fetchUserConnections, selected_item_changed } from '../actions'

import './css/navbar.css';

const userId = sessionStorage.getItem('userId');

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { showUsers: false, open:  false};
  }
  //Search filter menu
  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  };
  //handle Menu events
  onMenuItemClicked = (event, menuItem) => {
    console.log('you clicked a nested item.');
    this.props.selected_item_changed(menuItem.props.primaryText);
    console.log(menuItem.props.primaryText);
  }

  handleRequestClose = () => {
   this.setState({
     open: false,
   });
 };
  componentDidMount() {
    const { fetchAllUsers } = this.props;

    console.log(this.props.selectedItem);
    console.log(this.props.open);
    fetchAllUsers();
  }


  onItemClicked(item) {
    const { fetchUserInfo, fetchUserFeeds } = this.props;

    const sender_id = sessionStorage.getItem('userId');
    const receiver_id = item.value
    fetchUserInfo(item.value);
    fetchUserFeeds(item.value);
    this.props.fetchUserConnections(item.value);
    this.props.fetchConnectionStatus({ sender_id, receiver_id });
    this.props.history.push(`/profile/${item.value}`);
  }
  render() {
    const locationMenuItems = [{
      primaryText: 'Near Me'
    }, {
      primaryText: 'Bay Area'
    }];
    const trainingMenuItems = [{
      primaryText: 'less than 1 year'
    }, {
      primaryText: '1-3 years'
    }, {
      primaryText: '4-7 years'
    }, {
      primaryText: '7-10 years'
    }, {
      primaryText: '11+ years'
    }];
    const experienceMenuItems = [{
      primaryText: 'less than 1 year'
    }, {
      primaryText: '1-3 years'
    }, {
      primaryText: '4-7 years'
    }, {
      primaryText: '7-10 years'
    }, {
      primaryText: '11+ years'
    }];
    const genderMenuItems = [{
      primaryText: 'Male'
    }, {
      primaryText: 'Female'
    }];
    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link id="nav-header" className="navbar-brand" to="/feed">Women in Comedy</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <form className="navbar-form">

                <div className="input-group" style={styles.container}>
                  <div>
                    <FlatButton style={styles.filter}
                      onClick={this.handleTouchTap}
                      label="Filter"
                    />
                    <Popover
                      open={this.state.open}
                      anchorEl={this.state.anchorEl}
                      anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                      targetOrigin={{horizontal: 'left', vertical: 'top'}}
                      onRequestClose={this.handleRequestClose}
                    >
                      <Menu onChange={this.onMenuClicked}>
                        <MenuItem
                          primaryText="Location"
                          rightIcon={<ArrowDropRight />}
                          menuItems={locationMenuItems.map(menuItem => (
                            <MenuItem
                             {...menuItem}
                             onClick={
                               event => this.onMenuItemClicked(event, { props: {...menuItem}
                              })}
                           />
                          ))}
                        />
                        <MenuItem
                          primaryText="Training"
                          rightIcon={<ArrowDropRight />}
                          menuItems={trainingMenuItems.map(menuItem => (
                            <MenuItem
                             {...menuItem}
                             onClick={
                               event => this.onMenuItemClicked(event, { props: {...menuItem}
                              })}
                           />
                          ))}
                        />
                        <MenuItem
                          primaryText="Experience"
                          rightIcon={<ArrowDropRight />}
                          menuItems={experienceMenuItems.map(menuItem => (
                            <MenuItem
                             {...menuItem}
                             onClick={
                               event => this.onMenuItemClicked(event, { props: {...menuItem}
                              })}
                           />
                          ))}

                        />
                        <MenuItem primaryText="Gender"
                          rightIcon={<ArrowDropRight />}
                          menuItems={genderMenuItems.map(menuItem => (
                            <MenuItem
                             {...menuItem}
                             onClick={
                               event => this.onMenuItemClicked(event, { props: {...menuItem}
                              })}
                           />
                          ))}
                        />

                        <MenuItem
                          primaryText="Male"
                          onClick={this.handleClick}
                          value='Male'
                         />
                      </Menu>
                    </Popover>
            </div>
                </div>

                <div className="input-group">
                  <AutoComplete
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={this.props.users}
                    maxSearchResults={10}
                    hintText="Search"
                    underlineShow={false}
                    hintStyle={styles.hint}
                    inputStyle={styles.input}
                    textareaStyle={styles.text}
                    onNewRequest={(item) => this.onItemClicked(item)}
                  />
                  <i className="glyphicon glyphicon-search"></i>
                </div>
              </form>
            </li>
            <li><Link to="/feed"><i className="fa fa-home"><p>HOME</p></i></Link></li>
            <li><Link to="/events"><i className="fa fa-calendar-o"><p>EVENTS</p></i></Link></li>
            <li><a href="#" className="icon"><i className="fa fa-bell-o"><p>ALERTS</p></i></a></li>
            <li><Link to={`/profile/${userId}`}><img className="img-responsive" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /></Link></li>
          </ul>
        </div>
      </nav>
    );
  }
};

const styles = {
  container: {
    verticalAlign: 'top',
    height: '30px'
  },
  filter: {
    height: '30px',
    textTransform: 'none',
    backgroundColor: 'white',
    borderRadius: '20px'
  },
  input: {
    height: '30px',
    backgroundColor: 'white',
    borderRadius: '20px'

  },
  hint: {
    zIndex: 1,
    marginBottom: '7px',
    marginLeft: '10px'
  },
  text: {
    marginLeft: '10px'
  }
}
function mapStateToProps({ allUsers }) {
  const { selectedItem, open, anchorEl } = allUsers;
  const users = allUsers.userList.map(user => {

    return { text: `${user.firstName} ${user.lastName}`, value: user.id}
  });

  return { selectedItem, users, open, anchorEl };
}
export default connect(mapStateToProps, { fetchAllUsers, fetchUserInfo, fetchUserFeeds, fetchConnectionStatus, fetchUserConnections,selected_item_changed })(Navbar);
