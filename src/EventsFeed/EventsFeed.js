import React, { Component } from 'react';
import Header from '../EventsPage/components/HeaderComponent';
import Guests from './components/Guests';
import { RightGraySideBar, left, header } from '../common';


class EventsFeed extends Component {
  render() {
    return (
      <div>
        <Header />
        <RightGraySideBar />
      </div>
    );
  }
}

export default EventsFeed;
