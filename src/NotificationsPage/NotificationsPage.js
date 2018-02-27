import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    fetchUserInfo,
    fetchUserConnections,
    fetchPendingUserConnections,
    fetchNotifications
} from '../actions';
import Navbar from '../common/Navbar';
import NotificationButton from '../containers/notification_button';
import {LeftGraySideBar, RightGraySideBar, PageContent, FeedPostBar} from '../common';

// import NewFeeds from '../FeedPage/components/NewFeeds';
import UserInfo from '../FeedPage/components/UserInfo';
import Messages from '../FeedPage/components/Messages';


class Notification extends Component {
    constructor(props) {
        super(props);
        this.state = {
            rerender: false,
            notifications: this.props.notifications
        };
        // console.log(this.props);
    }

    componentDidMount() {
        // const valid = sessionStorage.getItem('confirmed');
        // if (valid === 'null' || !valid) {
        //     this.props.history.push('/');
        // }
        const {fetchUserInfo, fetchNotifications, fetchUserConnections, fetchPendingUserConnections} = this.props;
        fetchUserInfo(sessionStorage.getItem('userId'));
        fetchNotifications(sessionStorage.getItem('userId'));
        fetchUserConnections(sessionStorage.getItem('userId'));
        fetchPendingUserConnections(sessionStorage.getItem('userId'));
        console.log('*******************');
        console.log(sessionStorage.getItem('userId'));

        debugger;
    }

    renderNotifications = (notifications) => {
        return notifications.map(notification => {
            return (
                <div key={notification.id}>
                    <div id="user-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /><a href={"http://localhost:3000/notifications/" + notification.id}>Does this work</a>
                    </div>
                </div>
            );
        });
    };

    // onPost() {
    //     const body = this.props.userWallPost;
    //
    //     const userId = this.props.match.params.id || sessionStorage.getItem('userId');
    //     const authorId = sessionStorage.getItem('userId');
    //     this.props.createPostOnUserWall({body, userId, authorId}, this.props.fetchUserFeeds);
    // }

    render() {
        const {userInfo, userConnections, userNotifications, receivedConnectionRequest} = this.props;
        // console.log(this.props);
        return (
            <div>
                <Navbar history={this.props.history}/>
                <NotificationButton notifications={this.props.notifications}/>
                <RightGraySideBar>
                    <Messages connections={receivedConnectionRequest}/>
                </RightGraySideBar>
                {/*<LeftGraySideBar>*/}
                    {/*<UserInfo userInfo={userInfo} userNotifications={userNotifications}/>*/}
                {/*</LeftGraySideBar>*/}
                <PageContent>
                    <div className="feed-post-bar">
                        <div className="wrap">

                            <div className="notifications">

                                <p id="notification">Notifications<span
                                    id="notification-count">Need to fill later</span></p>
                                <div id="notification-info-wrapper">
                                    {userNotifications}
                                </div>
                            </div>
                        </div>
                    </div>
                </PageContent>
            </div>
        );
    }
}


const mapStateToProps = (state) => {
    const {userInfo, userNotifications, userConnections, receivedConnectionRequest, userWallPost} = state;
    return {userInfo, userNotifications, userConnections, receivedConnectionRequest, userWallPost};
}
export default connect(mapStateToProps,
    {
        fetchUserInfo,
        fetchUserConnections,
        fetchPendingUserConnections,
        fetchNotifications
    }
)(Notification);
