import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchUserInfo, fetchUserFeeds, fetchUserConnections, createConnectionRequest, fetchConnectionStatus } from '../actions';
import { Navbar } from '../common';

const userId = sessionStorage.getItem('userId');
class ProfilePage extends Component {
	componentWillMount() {
			const sender_id = sessionStorage.getItem('userId');
			const receiver_id = this.props.match.params.id;
      const { fetchUserInfo, fetchUserFeeds, fetchUserConnections } = this.props;
      this.props.fetchUserInfo(userId);
      this.props.fetchUserFeeds(userId);
      this.props.fetchUserConnections(userId);
			this.props.fetchConnectionStatus({ sender_id, receiver_id });
    }

	onPress() {
		const sender_id = sessionStorage.getItem('userId');
		const receiver_id = this.props.match.params.id;
		const data = { sender_id, receiver_id }
		this.props.createConnectionRequest(data);
	}

	renderConnection() {
		if (this.props.userInfo.id == userId) {
			return <div></div>
		}
		if (_.isEmpty(this.props.status)) {
			return <button type="button" style={{ position: 'relative', top: '300px', left: '300px'}} onClick={this.onPress.bind(this)}>Connect</button>
		}
		if (true) {

		}
    if (this.props.status.status === true) {
      return <div style ={{ position: 'relative', top: '300px', left: '300px'}}> Connected </div>
    }

		if (this.props.status.status === false) {
			return <div style={{ position: 'relative', top: '300px', left: '300px'}}> Request Pending...</div>
		}
	}

	render () {
		return (
			<div>
				<Navbar />
				{this.renderConnection()}
			</div>
		);
	};
}

  const mapStateToProps = (state) => {


    const { userInfo, userFeeds, userConnections, status } = state;
		console.log(userInfo);
		return { userInfo, userFeeds, userConnections, status };
  }
export default connect(mapStateToProps, { fetchUserInfo, fetchUserFeeds, fetchUserConnections, createConnectionRequest, fetchConnectionStatus })(ProfilePage);
