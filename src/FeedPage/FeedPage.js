import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo, fetchUserFeeds, fetchUserConnections } from '../actions';
import { Navbar, LeftGraySideBar, RightGraySideBar, PageContent } from '../common';
import NewFeeds from './components/NewFeeds';
import UserInfo from './components/UserInfo';
import './css/feed-page.css';

class Feed extends Component {
  componentWillMount() {
    const valid = sessionStorage.getItem('confirmed');
    if(valid == 'null' || !valid) {
      this.props.history.push('/');
    }
    const { fetchUserInfo, fetchUserFeeds, fetchUserConnections } = this.props;
    fetchUserInfo(sessionStorage.getItem('userId'));
    fetchUserFeeds(sessionStorage.getItem('userId'));
    fetchUserConnections(sessionStorage.getItem('userId'));
  }

  render() {
    console.log('render');
    const { userInfo, userConnections, userFeeds } = this.props;
    return (
      <div>
        <Navbar />
        <LeftGraySideBar>
          <UserInfo userInfo={userInfo} userConnections={userConnections} />
        </LeftGraySideBar>
        <RightGraySideBar />
        <PageContent pageTitle="Your Feed">
          <NewFeeds userFeeds={userFeeds} />
        </PageContent>
      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    console.log(state);
    const { userInfo, userFeeds, userConnections } = state;
    return { userInfo, userFeeds, userConnections };
  }
export default connect(mapStateToProps, { fetchUserInfo, fetchUserFeeds, fetchUserConnections })(Feed);
