import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchPendingUserConnections } from '../actions';
import { Navbar, LeftGraySideBar, RightGraySideBar, PageContent } from '../common';
import NewFeeds from './components/NewFeeds';
import UserInfo from './components/UserInfo';
import Messages from './components/Messages';


class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = { rerender: false };
  }

  componentDidMount() {

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

  rerender() {
    this.setState({ rerender: !this.state.rerender });
  }

  render() {
    const { userInfo, userConnections, userFeeds, receivedConnectionRequest } = this.props;
    return (
      <div>
        <Navbar />
        <RightGraySideBar>
          <Messages connections={receivedConnectionRequest} rerender={this.rerender.bind(this)}/>
        </RightGraySideBar>
        <LeftGraySideBar>
          <UserInfo userInfo={userInfo} userConnections={userConnections}  />
        </LeftGraySideBar>
        <PageContent pageTitle="Your Feed">
          <NewFeeds userFeeds={userFeeds} />
        </PageContent>
      </div>
    );
  }
}

  const mapStateToProps = (state) => {

    const { userInfo, userFeeds, userConnections,  receivedConnectionRequest  } = state;
    return { userInfo, userFeeds, userConnections, receivedConnectionRequest  };
  }
export default connect(mapStateToProps, { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchPendingUserConnections })(Feed);
