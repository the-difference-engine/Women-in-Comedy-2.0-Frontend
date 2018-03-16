import React, {Component} from 'react';
import {AutoComplete} from 'material-ui';
import {FlatButton, Popover, Menu, MenuItem} from 'material-ui';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {
    fetchAllUsers,
    fetchUserInfo,
    fetchUserFeeds,
    fetchConnectionStatus,
    fetchUserConnections,
    fetchNotifications,
    filterUsers
} from '../actions'
import axios from 'axios';
import './css/navbar.css';
import NotificationButton from '../containers/notification_button';

const userId = sessionStorage.getItem('userId');

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

    Logout() {
        axios.get(process.env.REACT_APP_API_URL_DEV + 'sessions/sign_out').then(response => {
            console.log(response.data.logout_message);
            sessionStorage.setItem('confirmed', null);
            sessionStorage.setItem('userId', null);
            this.props.history.push('/')
        });
    };

    componentDidMount() {
        const {fetchAllUsers} = this.props;
        fetchAllUsers();
        // fetchNotifications(sessionStorage.getItem('userId'));
    }

    handleTouchTap(event) {
        // This prevents ghost click.
        event.preventDefault();
        this.setState({open: true, anchorEl: event.currentTarget});
    };

    onMenuItemClicked(event, menuItem) {
        let {name, primaryText} = menuItem.props;
        this.props.filterUsers(name, primaryText);
    };

    onMenuClicked(event, value) {
    };

    handleRequestClose() {
        this.setState({open: false});
    };

    onItemClicked(item) {
        const {fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchConnectionStatus} = this.props;

        const sender_id = sessionStorage.getItem('userId');
        const receiver_id = item.value;
        fetchUserInfo(item.value);
        fetchUserFeeds(item.value);
        fetchUserConnections(item.value);
        fetchConnectionStatus({sender_id, receiver_id});
        this.props.history.push(`/profile/${item.value}`);
    }


    // renderNotifications() {
    //   if (this.props.allNotifications) {
    //     return this.props.allNotifications.map((notification) => {
    //       return (
    //         <li key={notification.id}>{notification.action}</li>
    //         );
    //     });
    //   };
    // }

    render() {
        const locationMenuItems = [
            {
                primaryText: 'San Francisco',
                name: 'city'
            }, {
                primaryText: 'Chicago',
                name: 'city'
            }, {
                primaryText: 'Oakland',
                name: 'city'
            }, {
                primaryText: 'Bay Area',
                name: 'city'
            }
        ];
        const trainingMenuItems = [
            {
                primaryText: 'less than 1 year',
                name: 'training'
            }, {
                primaryText: '1-3 years',
                name: 'training'
            }, {
                primaryText: '4-7 years',
                name: 'training'
            }, {
                primaryText: '7-10 years',
                name: 'training'
            }, {
                primaryText: '11+ years',
                name: 'training'
            }
        ];
        const experienceMenuItems = [
            {
                primaryText: 'less than 1 year',
                name: 'experience'
            }, {
                primaryText: '1-3 years',
                name: 'experience'
            }, {
                primaryText: '4-7 years',
                name: 'experience'
            }, {
                primaryText: '7-10 years',
                name: 'experience'
            }, {
                primaryText: '11+ years',
                name: 'experience'
            }
        ];
        const genderMenuItems = [
            {
                primaryText: 'Male',
                name: 'gender'
            }, {
                primaryText: 'Female',
                name: 'gender'
            }
        ];
        const {notifications} = this.props;
        debugger;
        return (<nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
                <div className="navbar-header">
                    <Link id="nav-header" className="navbar-brand" to="/feed">Women in Comedy</Link>
                </div>
                <ul className="nav navbar-nav navbar-right">
                    <li>
                        <form className="navbar-form">

                            <div className="input-group" style={styles.container}>
                                <div>
                                    <FlatButton style={styles.filter} onClick={this.handleTouchTap} label="Filter"/>
                                    <Popover open={this.state.open} anchorEl={this.state.anchorEl} anchorOrigin={{
                                        horizontal: 'left',
                                        vertical: 'bottom'
                                    }} targetOrigin={{
                                        horizontal: 'left',
                                        vertical: 'top'
                                    }} onRequestClose={this.handleRequestClose}>
                                        <Menu onChange={this.onMenuClicked}>
                                            <MenuItem primaryText="Reset"
                                                      onClick={event => this.onMenuItemClicked(event, {props: 'none'})}/>
                                            <MenuItem primaryText="Location" rightIcon={<ArrowDropRight/>}
                                                      menuItems={locationMenuItems.map(menuItem => (
                                                          <MenuItem {...menuItem}
                                                                    onClick={event => this.onMenuItemClicked(event, {
                                                                        props: {
                                                                            ...menuItem
                                                                        }
                                                                    })}/>))}/>
                                            <MenuItem primaryText="Training" rightIcon={<ArrowDropRight/>}
                                                      menuItems={trainingMenuItems.map(menuItem => (
                                                          <MenuItem {...menuItem}
                                                                    onClick={event => this.onMenuItemClicked(event, {
                                                                        props: {
                                                                            ...menuItem
                                                                        }
                                                                    })}/>))}/>
                                            <MenuItem primaryText="Experience" rightIcon={<ArrowDropRight/>}
                                                      menuItems={experienceMenuItems.map(menuItem => (
                                                          <MenuItem {...menuItem}
                                                                    onClick={event => this.onMenuItemClicked(event, {
                                                                        props: {
                                                                            ...menuItem
                                                                        }
                                                                    })}/>))}/>
                                            <MenuItem primaryText="Gender" rightIcon={<ArrowDropRight/>}
                                                      menuItems={genderMenuItems.map(menuItem => (
                                                          <MenuItem {...menuItem}
                                                                    onClick={event => this.onMenuItemClicked(event, {
                                                                        props: {
                                                                            ...menuItem
                                                                        }
                                                                    })}/>))}/>
                                        </Menu>
                                    </Popover>
                                </div>
                            </div>
                            <div className="input-group">
                                <AutoComplete filter={AutoComplete.fuzzyFilter} dataSource={this.props.users}
                                              maxSearchResults={10} hintText="Search" underlineShow={false}
                                              hintStyle={styles.hint} inputStyle={styles.input}
                                              textareaStyle={styles.text}
                                              onNewRequest={(item) => this.onItemClicked(item)}/>
                                <i className="glyphicon glyphicon-search"></i>
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
                    <li>
                        <NotificationButton notifications={notifications}/>
                    </li>
                    <li>
                        <Link to={`/profile/${userId}`}><img className="img-responsive"
                                                             src="https://u.o0bc.com/avatars/no-user-image.gif" alt=""/></Link>
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
        </nav>);
    }
};

// <a href="#" onClick={console.log(this.state)}className="icon" ><i className="fa fa-bell-o"><p>ALERTS {this.props.allNotifications}</p></i></a>

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
};

const  mapStateToProps = ({allUsers}) =>  {
    // debugger;
    // const {notifications} = state;
    const {filterUserList} = allUsers;
    const users = filterUserList.map(user => {
        return {text: `${user.firstName} ${user.lastName}`, value: user.id}
    });
    return {users};

}

export default connect(mapStateToProps,
    {
    fetchAllUsers,
    fetchUserInfo,
    fetchUserFeeds,
    fetchConnectionStatus,
    // fetchNotifications,
    fetchUserConnections,
    filterUsers
}
)(Navbar);
