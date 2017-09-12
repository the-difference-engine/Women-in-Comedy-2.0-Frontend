import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchPendingUserConnections } from '../actions';
import { Navbar, LeftGraySideBar, RightGraySideBar, PageContent } from '../common';
import NewFeeds from './components/NewFeeds';
import UserInfo from './components/UserInfo';
import Messages from './components/Messages';


class Feed extends Component {
  componentWillMount() {
    const valid = sessionStorage.getItem('confirmed');
    if(valid == 'null' || !valid) {
      this.props.history.push('/');
    }
    const { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchPendingUserConnections } = this.props;
    fetchUserInfo(sessionStorage.getItem('userId'));
    fetchUserFeeds(sessionStorage.getItem('userId'));
    fetchUserConnections(sessionStorage.getItem('userId'));
    fetchPendingUserConnections(sessionStorage.getItem('userId'));
  }

  render() {
    console.log('render');
    const { userInfo, userConnections, userFeeds, pendingUserConnections } = this.props;
    return (
      <div>
        <Navbar />
        <LeftGraySideBar>
          <UserInfo userInfo={userInfo} userConnections={userConnections}  />
        </LeftGraySideBar>
        <RightGraySideBar>
          <Messages pendingUserConnections = {pendingUserConnections} />
        </RightGraySideBar>
        <PageContent pageTitle="Your Feed">
          <NewFeeds userFeeds={userFeeds} />
        </PageContent>
      </div>
    );
  }
}

  const mapStateToProps = (state) => {
    console.log(state);
    const { userInfo, userFeeds, userConnections, pendingUserConnections } = state;
    return { userInfo, userFeeds, userConnections, pendingUserConnections };
  }
export default connect(mapStateToProps, { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchPendingUserConnections })(Feed);
