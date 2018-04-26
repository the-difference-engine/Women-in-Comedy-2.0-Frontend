import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-router-dom';
import {connect} from 'react-redux';

import {markNotificationsAsRead, markOneAsRead} from "../../actions";

class UnreadNotification extends Component {

    renderNotifications() {
        if (this.props.notifications === null) {
            return <div>You have no notifications at this time.</div>
        } else {
            return this.props.notifications.notifications.map(notification => {
                if (notification.action === "connection_accepted") {
                    return (
                        <div key={notification.id}>
                            <div id="user-info">
                                <img id="connection-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt=""/>

                                <Link to={`/profile/${notification.sent_from}`}
                                      onClick={() => this.props.markOneAsRead(notification.sent_to, notification.id)}
                                      method="POST"><p
                                    className="connection-name">{notification.sent_from_name} </p></Link>
                                <span>has accepted your connection request</span>

                            </div>
                        </div>
                    );
                }
                // if (notification.action === "connection_request") {
                //     return (
                //         <div key={notification.id}>
                //             <div id="user-info">
                //                 <img id="connection-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt=""/>
                //
                //                 <Link to={`/profile/${notification.sent_from}`}
                //                       onClick={() => this.props.markOneAsRead(notification.sent_to, notification.id)} method="POST"><p
                //                     className="connection-name">{notification.sent_from_name}</p></Link>
                //                 <span>has sent you a connection request</span>
                //
                //             </div>
                //         </div>
                //     );
                // }
            });
        }
    }

    renderPendingConnections2() {
        const userId = sessionStorage.getItem('userId');
        const callback = this.props.fetchPendingUserConnections;
        const callback2 = this.props.fetchUserConnections;
        return this.props.connections.map(connection => {
            return (
                <div key={connection.requestId}>
                    <img id="connection-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
                    <p id="connection-name">{connection.firstName} {connection.lastName}</p>
                    <br/>
                    <button type="button" onClick={() => this.props.acceptConnection(userId, connection.senderId, callback, callback2)}>accept</button>
                    <button type="button" onClick={() => this.props.declineConnection(userId, connection.requestId, callback)}>decline</button>
                </div>
            );
        });
    }

    render() {
        return <div className="event-page-content">
            <div className="container">
                <div className="row events-grid" id="my-events">
                    <div className="col-xs-offset-1 col-xs-3">
                        <h1 className="events-header" id="next-event" >Notifications</h1>
                        <button type="button" className="btn btn-danger"
                                onClick={() => this.props.markNotificationsAsRead(sessionStorage.getItem('userId'))}>Mark
                            All As Read
                        </button>
                    </div>
                </div>
                <div className="row">
                    <br/>
                    {this.renderNotifications()}
                    {this.renderPendingConnections2()}
                    <br/>
                </div>
                <div className="container">
                    <div id="my-events">
                        <button type="button" className="btn btn-danger"
                                onClick={() => this.props.markNotificationsAsRead(sessionStorage.getItem('userId'))}>Mark
                            All As Read
                        </button>
                    </div>
                </div>
            </div>
        </div>
    }
}


export default connect(null, {markNotificationsAsRead, markOneAsRead})(UnreadNotification);





