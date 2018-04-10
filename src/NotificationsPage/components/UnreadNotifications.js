import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Form from 'react-router-dom';
import {connect} from 'react-redux';

import {markNotificationsAsRead, markOneAsRead} from "../../actions";

class UnreadNotification extends Component {

    renderNotifications() {
        if (this.props.notifications===null) {
            return <div>You have no notifications at this time.</div>
        } else {
            return this.props.notifications.notifications.map(notification => {
                if (notification.action === "connection_accepted") {
                    return (
                        <div key={notification.id}>
                            <div>
                                <Link to={`/profile/${notification.sent_from}`} onClick={ () => this.props.markOneAsRead(notification.sent_to, notification.id)} method="POST" ><p
                                    id="connection-name">{notification.sent_from_name} </p></Link>
                                <span>has accepted your connection request</span>
                            </div>
                        </div>
                    );
                }
            });
        }
    }

    render() {
        return <div className="event-page-content">
            <div className="container">
                <div className="row events-grid" id="my-events">
                    <div className="col-xs-offset-1 col-xs-3">
                        <h1 className="events-header">Notifications</h1>
                    </div>
                    <div id="events-search-bar">
                        <div className="col-xs-offset-4 col-xs-4">
                            <div className="input-group">
                                <input type="text" className="form-control" placeholder="Find Events"/>
                                <i className="glyphicon glyphicon-search"></i>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <br/>
                    {this.renderNotifications()}
                    <br/>
                </div>
                <button type="button" onClick={() => this.props.markNotificationsAsRead(sessionStorage.getItem('userId'))}>Mark All As Read</button>
            </div>
        </div>
    }
}


export default connect(null, {markNotificationsAsRead, markOneAsRead})(UnreadNotification);





