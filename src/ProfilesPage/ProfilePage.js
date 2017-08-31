import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo, fetchUserFeeds, fetchUserConnections, createConnectionRequest } from '../actions';
import Header from '../EventsPage/components/HeaderComponent';
import Profile from './components/profile';
import ProfilePhoto from './components/ProfilePhoto';
import ProfileConnections from './components/ProfileConnections';


class ProfilePage extends Component {
	componentWillMount() {


        const query = window.location.pathname;
        const new_query = query.slice(9);
        console.log('new query below');
        console.log(new_query);
        const { fetchUserInfo, fetchUserFeeds, fetchUserConnections } = this.props;
        fetchUserInfo(new_query);
        fetchUserFeeds(new_query);
        fetchUserConnections(new_query);



    }

	onPress() {
		const sender_id = sessionStorage.getItem('userId');
		console.log(sender_id);
		const receiver_id = this.props.match.params.id;
		const data = { sender_id, receiver_id }
		this.props.createConnectionRequest(data);
	}

	render () {
	    const { userInfo, userConnections, userFeeds } = this.props;
		return (
			<div>
				<Header />
        	<ProfilePhoto userInfo={userInfo} userConnections={userConnections} />
					<Profile userFeeds={userFeeds} />
					<ProfileConnections userConnections={userConnections} />
					<button type="button" style={{ position: 'relative', top: '300px', left: '300px'}} onClick={this.onPress.bind(this)}>Connect</button>
			</div>

		);
	}

}



  const mapStateToProps = (state) => {
    console.log(state);
    const { userInfo, userFeeds, userConnections } = state;
    return { userInfo, userFeeds, userConnections };
  }
export default connect(mapStateToProps, { fetchUserInfo, fetchUserFeeds, fetchUserConnections, createConnectionRequest })(ProfilePage);
