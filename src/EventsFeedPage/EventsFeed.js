import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
    attendEvent,
    createPostOnEventWall,
    eventWallInputChange,
    fetchEventInfo,
    fetchNotifications,
    fetchUserInfo,
    unattendEvent
} from '../actions';
import Guests from './components/Guests';
import NewFeeds from './components/NewFeeds';
import EventInfo from './components/EventInfo';
import Navbar from '../common/Navbar';
import {LeftGraySideBar, PageContent, RightGraySideBar} from '../common';

class EventsFeed extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const eventId = this.props.match.params.id;
        this.props.fetchNotifications(sessionStorage.getItem('userId'));
        this.props.fetchEventInfo(eventId);
        this.props.fetchUserInfo(sessionStorage.getItem('userId'));
    }

    onCreatePost() {
        const body = this.props.eventWallPost;
        const eventId = this.props.match.params.id;
        const authorId = sessionStorage.getItem('userId');
        this.props.createPostOnEventWall({body, eventId, authorId}, this.props.fetchEventInfo);
    }

    render() {
        const {notifications} = this.props;
        return (
            <div id="events-feed-container">
                <Navbar history={this.props.history} notifications={notifications}/>
                <RightGraySideBar>
                    <Guests
                        event={this.props.selectedEvent}
                    />
                </RightGraySideBar>
                <LeftGraySideBar>
                    <EventInfo
                        event={this.props.selectedEvent}
                        attendEvent={this.props.attendEvent}
                        userInfo={this.props.userInfo}
                        eventId={this.props.match.params.id}
                        fetchEventInfo={this.props.fetchEventInfo}
                        unattendEvent={this.props.unattendEvent}
                    />
                </LeftGraySideBar>

                <PageContent pageTitle={"Event Feed"}>
                    <div className="feed-post-bar">
                        <div className="wrap">
                            <div className="search">
                                <input
                                    type="text"
                                    className="searchTerm"
                                    placeholder="What's New?"
                                    onChange={event => this.props.eventWallInputChange(event.target.value)}
                                    value={this.props.eventWallPost}
                                />
                                <div className="post-button">
                                    <button className="btn btn-default" onClick={this.onCreatePost.bind(this)}>POST
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <NewFeeds event={this.props.selectedEvent}/>
                </PageContent>
            </div>
        );
    }
}

function mapStateToProps({selectedEvent, userInfo, eventWallPost, notifications}) {
    return {selectedEvent, userInfo, eventWallPost, notifications};
}

export default connect(mapStateToProps,
    {
        fetchEventInfo,
        attendEvent,
        fetchNotifications,
        fetchUserInfo,
        unattendEvent,
        eventWallInputChange,
        createPostOnEventWall
    }
)(EventsFeed);
