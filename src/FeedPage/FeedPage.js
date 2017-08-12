import React, { Component } from 'react';
import { Navbar, LeftGraySideBar, RightGraySideBar, PageContent } from '../common';
import NewFeeds from './components/NewFeeds';
import './css/feed-page.css';

class Feed extends Component {
  componentWillMount() {
    const valid = sessionStorage.getItem('confirmed');
    console.log(valid);
    console.log(typeof valid);
    if(valid == 'null' || !valid) {
      this.props.history.push('/');
    }
  }
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
