import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchUserInfo,
    fetchUserConnections,
    fetchPendingUserConnections,
    fetchNotifications
} from '../actions';
import Navbar from '../common/Navbar';
import {LeftGraySideBar, RightGraySideBar, PageContent, FeedPostBar} from '../common';
import UnreadNotifications from './components/UnreadNotifications';
import NotificationButton from '../containers/notification_button';

// import NewFeeds from '../FeedPage/components/NewFeeds';
import UserInfo from '../FeedPage/components/UserInfo';
import Messages from '../FeedPage/components/Messages';


class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rerender: false
        };
        this._myHandler = this._myHandler.bind(this);
        this.renderNotis = this.renderNotis.bind(this);
        // this.renderNotifications = this.renderNotifications.bind(this);
    }

    _myHandler = (props) => {
        console.log(props.notifications);
        debugger;
        console.log(props);
    };

    renderNotis = (props) => {

        debugger;
        this.setState.notifications = this.props.notifications;
         this.props.notifications.map(notification => {
            return <div>Hello</div>
                // <div key={notification.id}>
                //     <div id="user-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt=""/><a
                //         href={"http://localhost:3000/notifications/" + notification.id}>Does this work</a>
                //     </div>
                // </div>

        });
    };

    componentDidMount() {
        // const valid = sessionStorage.getItem('confirmed');
        // if (valid === 'null' || !valid) {
        //     this.props.history.push('/');
        // }
        const {fetchUserInfo, fetchNotifications, fetchUserConnections, fetchPendingUserConnections} = this.props;
        fetchUserInfo(sessionStorage.getItem('userId'));
        fetchNotifications(sessionStorage.getItem('userId'));
        fetchUserConnections(sessionStorage.getItem('userId'));

    }

    renderNotifications(notifications) {
        return notifications.map(notification => {
            return (
                <div key={notification.id}>
                    <div id="user-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt=""/><a
                        href={"http://localhost:3000/notifications/" + notification.id}>Does this work</a>
                    </div>
                </div>
            );
        });
    };

    render() {
        const {userInfo, userConnections, notifications, receivedConnectionRequest} = this.props;
        return (
            <div>
                <Navbar history={this.props.history}/>
                <UnreadNotifications notifications={notifications}/>
                <RightGraySideBar>
                    <Messages connections={receivedConnectionRequest}/>
                </RightGraySideBar>
                <LeftGraySideBar>
                    <UserInfo userInfo={userInfo} userConnections={userConnections}/>
                </LeftGraySideBar>
                <PageContent>
                    <div className="feed-post-bar">
                        <div className="wrap">

                            <div className="notifications">

                                <button type="button" className="btn btn-danger" onClick={this._myHandler}><i className="fa fa-trash"> Delete</i></button>
                                <button type="button" className="btn btn-danger" onClick={this.renderNotis}><i className="fa fa-trash"> Notifications</i></button>

                                {/*<p id="notification">Notifications<span*/}
                                {/*id="notification-count">Need to fill later</span></p>*/}
                                {/*<div id="notification-info-wrapper">*/}
                                {/*{notifications}*/}
                                {/*</div>*/}
                            </div>
                        </div>
                    </div>
                </PageContent>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const {userInfo, notifications, userConnections, receivedConnectionRequest, userWallPost} = state;
    return {userInfo, notifications, userConnections, receivedConnectionRequest, userWallPost};
}
export default connect(mapStateToProps,
    {
        fetchUserInfo,
        fetchUserConnections,
        fetchPendingUserConnections,
        fetchNotifications
    }
)(Notification);
