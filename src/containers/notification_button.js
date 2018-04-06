import React from 'react';

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

export default (props) => {
    if (props.notifications === null) {
        return <div>
            <a href={'/notifications'} className="icon"><i className="fa fa-bell-o"><p>ALERTS </p></i></a>
        </div>
    }

    function findConnectionActions(props) {
        if (props.notifications !== null) {
            var connectionAccepted = props.notifications.notifications.filter(not => not.action === "connection_accepted");
            return connectionAccepted.length;
        }
    }

    return (
        <div>
            <a href={'/notifications'} className="icon"><i className="fa fa-bell-o"><span
                className="badge">{findConnectionActions(props)}</span><p>ALERTS </p></i></a>
        </div>
    );
};


// const NotificationButton = (props) => {
//     const { notifications} = props;
//
//     return (
//         <div>
//             {notificationPopUp(notifications)}
//                 </div>
//     );
// };
{/*//*/
}
{/*// const notificationPopUp = ({notifications}) => {*/
}
//     if (!notifications) {
//         return <a href='#' className="icon"><i className="fa fa-bell-o"><p>ALERTS </p></i></a>
//     }
//     return (
//         <a href='#' className="icon"><i className="fa fa-bell-o"><span className="badge">123</span>
//             <p>ALERTS </p></i></a>
//     );
// };
//
// export default NotificationButton;

