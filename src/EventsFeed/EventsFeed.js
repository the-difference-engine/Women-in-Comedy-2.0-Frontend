import React, { Component } from 'react';
import Guests from './components/Guests';
import { RightGraySideBar, LeftGraySideBar, Navbar } from '../common';


class EventsFeed extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <RightGraySideBar />
        <LeftGraySideBar />
      </div>
    );
  }
}

export default EventsFeed;
