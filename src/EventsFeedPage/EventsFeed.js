import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEventInfo } from '../actions';
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
  }
  render() {
    return (
      <div id="events-feed-container">
        <Navbar />
        <RightGraySideBar>
          <Guests event={this.props.selectedEvent}/>
        </RightGraySideBar>

        <LeftGraySideBar>
          <EventInfo event={this.props.selectedEvent} />
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
function mapStateToProps({ selectedEvent }) {
  return { selectedEvent };
}
export default connect(mapStateToProps, { fetchEventInfo })(EventsFeed);
