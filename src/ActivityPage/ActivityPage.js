import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';
import Header from '../EventsPage/components/HeaderComponent';
import Bio from './components/Bio';
import Users from './components/Users';
import YourActivity from './ActivityPage';
import feedSearch from './ActivityPage';

class ActivityPage extends Component {
	componentWillMount() {
		const { fetchUsers } = this.props;
		console.log('fetch Users below');
		fetchUsers();

	}


	render () {
		const { usersInfo } = this.props;
		console.log('usersInfo below YO-HO-HO');
        console.log({ usersInfo });
		return (
			<div>
				<Header />
				<Bio usersInfo={usersInfo}/>
				<Users usersInfo={usersInfo} />

			</div>
		);
	};
}

	const mapStateToProps = (state) => {
		console.log('state below, activitypage.js');
		console.log(state);
		const { usersInfo } = state;
		return { usersInfo };
	}

export default connect(mapStateToProps, { fetchUsers })(ActivityPage);
