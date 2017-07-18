import React, { Component } from 'react';
import Header from '../EventsPage/components/HeaderComponent';
import Bio from './components/Bio';
import Users from './components/Users';
import YourActivity from './ActivityPage';

class ActivityPage extends Component {
	render () {
		return (
			<div>
				<Header />
				<Bio />
				<Users />
				{/* <YourActivity /> */}
			</div>
		);
	}
};

export default ActivityPage;
