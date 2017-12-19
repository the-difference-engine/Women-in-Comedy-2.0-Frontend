import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNotifications } from '../actions';

class NotificationButton extends Component {
  constructor(props) {
    super(props);
    this.state = { notifications: [] };

  }

  componentDidMount() {
    const userId = sessionStorage.getItem('userId');
    const {fetchNotifications} = this.props;
    fetchNotifications(userId);
    // const allNotifications = fetchNotifications(userId);
    // this.setState( {notifications: allNotifications} );
  }

  render() {
    return (
      <a href="#" onClick={console.log(this.props)}className="icon" ><i className="fa fa-bell-o"><p>ALERTS </p></i></a>
      );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchNotifications }, dispatch);
}

export default connect(null, mapDispatchToProps)(NotificationButton);