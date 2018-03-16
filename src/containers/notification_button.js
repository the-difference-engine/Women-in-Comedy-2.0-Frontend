import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchNotifications } from '../actions';

// class NotificationButton extends Component {

  // constructor(props) {
  //   super(props);
  // }
  //
  // componentDidMount() {
  //   const userId = sessionStorage.getItem('userId');
  //   const {fetchNotifications} = this.props;
  //   fetchNotifications(userId);
  //
  // }


  // render() {
  //
  //   return (
  //
  //     <a href='#'className="icon"><i className="fa fa-bell-o"><span className="badge">{this.props.notifications.length}</span><p>ALERTS </p></i></a>
  //     );
  // }


// function mapDispatchToProps(dispatch) {
//   return bindActionCreators({ fetchNotifications }, dispatch);
// }

// const mapStateToProps = state => {
//     const {notifications} = state;
//     return {notifications};
//
// };

// export default connect(null, mapDispatchToProps)(NotificationButton);
// export default connect(mapStateToProps, {fetchNotifications})(NotificationButton);


// };

// export default (props) => {
//
//     return (
//         debugger;
//       <a href='#' className="icon"><i className="fa fa-bell-o"><span className="badge">{this.props.notifications.length}</span><p>ALERTS </p></i></a>
//       );
// };
// export default connect(null, {fetchNotifications})(NotificationButton);











const NotificationButton = (props) => {
    const { notifications} = props;
    return (
        <div>
            <a href='#' className="icon"><i className="fa fa-bell-o"><span className="badge">123</span><p>ALERTS </p></i></a>
                </div>
    );
};

export default NotificationButton;

