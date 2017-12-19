import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyUpcomingEvents, fetchUpcomingEvents } from '../actions';
import AddEvent from './components/AddEvent';
import AllUpcomingEvents from './components/AllUpcomingEvents';
import MyUpcomingEvents from './components/MyUpcomingEvents';
import Navbar  from '../common/Navbar';

class EventsPage extends Component {
  
  componentDidMount() {
    const userId = sessionStorage.getItem('userId');
    this.props.fetchMyUpcomingEvents(userId);
    this.props.fetchUpcomingEvents();
  }
	render () {
		return (
			<div id="events-page">
        <Navbar history={this.props.history} />
				<MyUpcomingEvents myUpcomingEvents={this.props.myUpcomingEvents} />
				<AllUpcomingEvents upcomingEvents={this.props.upcomingEvents} />
				<AddEvent history={this.props.history}/>
			</div>
		);
	}
}

function mapStateToProps({ myUpcomingEvents, upcomingEvents }) {
  return { myUpcomingEvents, upcomingEvents };
}
export default connect(mapStateToProps, { fetchMyUpcomingEvents, fetchUpcomingEvents })(EventsPage);
