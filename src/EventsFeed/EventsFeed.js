import React, { Component } from 'react';
import Guests from './components/Guests';

import { RightGraySideBar, LeftGraySideBar, Navbar } from '../common';

import { RightGraySideBar, FeedPostBar } from '../common';



class EventsFeed extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <RightGraySideBar />

        <LeftGraySideBar />

        <FeedPostBar/>


      </div>
    );
  }
}

export default EventsFeed;
