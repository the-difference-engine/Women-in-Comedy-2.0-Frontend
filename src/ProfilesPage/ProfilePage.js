import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchUserEvents } from '../actions';
import Header from '../EventsPage/components/HeaderComponent';
import Profile from './components/profile';
import ProfilePhoto from './components/ProfilePhoto';
import ProfileConnections from './components/ProfileConnections';


class ProfilePage extends Component {
	componentWillMount() {

        const { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchUserEvents } = this.props; 
    
        const query = window.location.pathname;
        const new_query = query.slice(9);
        console.log('new query below');
        console.log(new_query);
        fetchUserInfo(new_query);
        fetchUserFeeds(new_query);
        fetchUserConnections(new_query);
        fetchUserEvents(new_query);



    }

	render () {
    	const { userInfo, userConnections, userFeeds, userEvents } = this.props;
        console.log('this.props below YO HOHO');
        console.log({ userFeeds });


		return (
			<div>
				<Header />
        		<ProfilePhoto userInfo={userInfo} userConnections={userConnections} />
				<Profile userEvents={userEvents} />
				<ProfileConnections userConnections={userConnections} />

			</div>

		);
	};

}

  const mapStateToProps = (state) => {
    console.log(state);
    const { userInfo, userFeeds, userConnections, userEvents } = state;
    return { userInfo, userFeeds, userConnections, userEvents };
  }
export default connect(mapStateToProps, { fetchUserInfo, fetchUserFeeds, fetchUserConnections, fetchUserEvents })(ProfilePage);