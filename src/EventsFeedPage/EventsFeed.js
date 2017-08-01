import React, { Component } from 'react';
import Guests from './components/Guests';
import NewFeeds from './components/NewFeeds';


import { RightGraySideBar, LeftGraySideBar, Navbar, PageContent, Feed } from '../common';

class EventsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageTitle: 'Event Feed'
    };
  }
  render() {
    return (
      <div id="events-feed-container">
        <Navbar />
        <RightGraySideBar />

        <LeftGraySideBar>
        </LeftGraySideBar>

        <PageContent pageTitle={this.state.pageTitle}>
          <NewFeeds />
        </PageContent>
      </div>
    );
  }
}

export default EventsFeed;
