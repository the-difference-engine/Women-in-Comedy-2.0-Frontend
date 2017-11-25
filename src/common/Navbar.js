import React, { Component } from 'react';
import { AutoComplete } from 'material-ui';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllUsers, fetchUserInfo, fetchUserFeeds, fetchConnectionStatus, fetchUserConnections, fetchNotifications } from '../actions'
import axios from 'axios';
import './css/navbar.css';

const userId = sessionStorage.getItem('userId');

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = { showUsers: false, allNotifications: {} };
  }
  componentWillMount() {
    
  }
  componentDidMount() {
    this.props.fetchAllUsers();
  }

  onItemClicked(item) {
    const sender_id = sessionStorage.getItem('userId');
    const receiver_id = item.value
    this.props.fetchUserInfo(item.value);
    this.props.fetchUserFeeds(item.value);
    this.props.fetchUserConnections(item.value);
    this.props.fetchConnectionStatus({ sender_id, receiver_id });
    this.props.fetchNotifications({ sender_id });
    this.props.history.push(`/profile/${item.value}`);


  }

  // renderNotifications() {
  //   this.props.fetchNotifications(userId);
  //   if (this.props.userInfo.id == userId) {
  //     return <label>
  //     Notifications
  //     </label>
  //   }

  Notifications() {
    axios.get(`http://localhost:9000/api/v1/notifications/${userId}`).then(response => {
      this.setState({allNotifications: response.data})
      // console.log(this.allNotifications)
    });
  };

  render() {
    let allNotifications = this.Notifications();

    return (
      <nav className="navbar navbar-default navbar-fixed-top">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link id="nav-header" className="navbar-brand" to="/feed">Women in Comedy</Link>
          </div>
          <ul className="nav navbar-nav navbar-right">
            <li>
              <form className="navbar-form">
                <div className="input-group">
                  <AutoComplete
                    filter={AutoComplete.fuzzyFilter}
                    dataSource={this.props.allUsers}
                    maxSearchResults={5}
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
            <li><a href="#" className="icon" ><i className="fa fa-bell-o"><p>ALERTS {this.state.allNotifications.length}</p></i></a></li>
            <li><Link to={`/profile/${userId}`}><img className="img-responsive" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /></Link></li>
          </ul>
        </div>
      </nav>
    );
  }
};
// onClick={this.Notifications.bind(this)}
const styles = {
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
  allUsers = allUsers.map(user => {
    return { text: `${user.firstName} ${user.lastName}`, value: user.id}
  });

  return { allUsers };
}
export default connect(mapStateToProps, { fetchAllUsers, fetchUserInfo, fetchUserFeeds, fetchConnectionStatus, fetchUserConnections, fetchNotifications })(Navbar);
