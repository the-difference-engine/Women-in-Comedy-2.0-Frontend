import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEventInfo, attendEvent, fetchUserInfo, unattendEvent } from '../actions';
import Guests from './components/Guests';
import NewFeeds from './components/NewFeeds';
import EventInfo from './components/EventInfo';

import { RightGraySideBar, LeftGraySideBar, Navbar, PageContent, Feed } from '../common';

class EventsFeed extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    const eventId = this.props.match.params.id;
    this.props.fetchEventInfo(eventId);
    this.props.fetchUserInfo(sessionStorage.getItem('userId'));
  }
  render() {
    return (
      <div id="events-feed-container">
        <Navbar />
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
                <input type="text" className="searchTerm" placeholder="What's New?"
                />
                <div className="post-button"><button className="btn btn-default">POST</button></div>
              </div>
            </div>
          </div>
          <NewFeeds />
        </PageContent>
      </div>
    );
  }
}
function mapStateToProps({ selectedEvent, userInfo }) {

  return { selectedEvent, userInfo };
}
export default connect(mapStateToProps, { fetchEventInfo, attendEvent, fetchUserInfo, unattendEvent })(EventsFeed);
