import React, { Component } from 'react';
import { Navbar, LeftGraySideBar, RightGraySideBar, PageContent } from '../common';
import NewFeeds from './components/NewFeeds';
import './css/feed-page.css';

class Feed extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <LeftGraySideBar />
        <RightGraySideBar />

        <PageContent pageTitle="Your Feed">
          <NewFeeds />
        </PageContent>
      </div>
    );
  }
}

export default Feed;
