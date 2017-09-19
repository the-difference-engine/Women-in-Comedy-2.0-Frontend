import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import {
	fetchUserInfo,
	fetchUserFeeds,
	fetchUserConnections,
	createConnectionRequest,
	fetchConnectionStatus,
	userWallInputChange,
	createPostOnUserWall
} from '../actions';
import { Navbar, LeftGraySideBar, RightGraySideBar, PageContent } from '../common';
import UserInfo from './components/UserInfo';
import ProfileConnections from './components/ProfileConnections';
import ProfileFeed from './components/ProfileFeed';

const userId = sessionStorage.getItem('userId');
class ProfilePage extends Component {
	componentWillMount() {
			const sender_id = sessionStorage.getItem('userId');
			const receiver_id = this.props.match.params.id;
      const { fetchUserInfo, fetchUserFeeds, fetchUserConnections } = this.props;
      this.props.fetchUserInfo(this.props.match.params.id);
      this.props.fetchUserFeeds(this.props.match.params.id);
      this.props.fetchUserConnections(this.props.match.params.id);
			this.props.fetchConnectionStatus({ sender_id, receiver_id });
    }

	onPress() {
		const sender_id = sessionStorage.getItem('userId');
		const receiver_id = this.props.match.params.id;
		const data = { sender_id, receiver_id }
		this.props.createConnectionRequest(data);
	}

	onPost() {
		const body = this.props.userWallPost;
		const userId = this.props.match.params.id || sessionStorage.getItem('userId');
		const authorId = sessionStorage.getItem('userId');
		this.props.createPostOnUserWall({ body, userId, authorId }, this.props.fetchUserFeeds);
	}

	renderConnection() {
		if (this.props.userInfo.id == userId) {
			return <div></div>
		}
		if (_.isEmpty(this.props.status)) {
			return <button type="button"  onClick={this.onPress.bind(this)}>Connect</button>
		}

    if (this.props.status.status === true) {
      return <div> Connected </div>
    }

		if (this.props.status.status === false) {
			return <div> Request Pending...</div>
		}
	}

	render () {
		return (
			<div>
				<Navbar />
				<LeftGraySideBar>
					<UserInfo userInfo={this.props.userInfo}/>
					{this.renderConnection()}
				</LeftGraySideBar>
				<RightGraySideBar>
					<ProfileConnections connections={this.props.userConnections}/>
				</RightGraySideBar>
				<PageContent>
					<div className="feed-post-bar">
            <div className="wrap">
              <div className="search">
                <input type="text" className="searchTerm" placeholder="What's New?"
                  onChange={(event) => this.props.userWallInputChange(event.target.value)}
                  value={this.props.userWallPost}
                />
                <div className="post-button"><button className="btn btn-default" onClick={this.onPost.bind(this)}>POST</button></div>
              </div>
            </div>
          </div>
					<ProfileFeed feeds={this.props.userFeeds}/>
				</PageContent>
			</div>
		);
	};
}

  const mapStateToProps = (state) => {
    const { userInfo, userFeeds, userConnections, status, userWallPost } = state;
		console.log(userFeeds);

		return { userInfo, userFeeds, userConnections, status, userWallPost };
  }
export default connect(mapStateToProps,
	{
		fetchUserInfo,
		fetchUserFeeds,
		fetchUserConnections,
		createConnectionRequest,
		fetchConnectionStatus,
		userWallInputChange,
		createPostOnUserWall
	}
	)(ProfilePage);
