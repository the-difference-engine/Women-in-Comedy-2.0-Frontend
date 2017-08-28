import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo, fetchUserFeeds, fetchUserConnections } from '../actions';
import Header from '../EventsPage/components/HeaderComponent';
import Profile from './components/profile';
import ProfilePhoto from './components/ProfilePhoto';
import ProfileConnections from './components/ProfileConnections';


class ProfilePage extends Component {
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

	render () {
	    const { userInfo, userConnections, userFeeds } = this.props;
		return (
			<div>
				<Header />
        		<ProfilePhoto userInfo={userInfo} userConnections={userConnections} />
				<Profile userFeeds={userFeeds} />
				<ProfileConnections userConnections={userConnections} />

			</div>

		);
	}

}



  const mapStateToProps = (state) => {
    console.log(state);
    const { userInfo, userFeeds, userConnections } = state;
    return { userInfo, userFeeds, userConnections };
  }
export default connect(mapStateToProps, { fetchUserInfo, fetchUserFeeds, fetchUserConnections })(ProfilePage);
