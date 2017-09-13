import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchEventInfo } from '../actions';
import Guests from './components/Guests';
import NewFeeds from './components/NewFeeds';

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
        <RightGraySideBar />

        <LeftGraySideBar>
        </LeftGraySideBar>

        <PageContent pageTitle={"Event Feed"}>
          <NewFeeds />
        </PageContent>
      </div>
    );
  }
}
function mapStateToProps({ selectedEvent }) {
  console.log(selectedEvent);
  return { selectedEvent };
}
export default connect(mapStateToProps, { fetchEventInfo })(EventsFeed);
