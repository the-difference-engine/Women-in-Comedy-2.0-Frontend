import React, { Component } from 'react';
import AddEvent from './components/AddEvent';
import AllUpcomingEvents from './components/AllUpcomingEvents';
import MyUpcomingEvents from './components/MyUpcomingEvents';
import HeaderComponent from './components/HeaderComponent';
import { Navbar } from '../common';

class EventsPage extends Component {
  constructor(props) {
		super(props);

	}
	render () {
		return (
			<div id="events-page">
        <Navbar />
				<MyUpcomingEvents />
				<AllUpcomingEvents />
				<AddEvent history={this.props.history}/>
			</div>
		);
	}
}

export default EventsPage;
