import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchMyUpcomingEvents, fetchNotifications, fetchUpcomingEvents} from '../actions';
import AddEvent from './components/AddEvent';
import AllUpcomingEvents from './components/AllUpcomingEvents';
import MyUpcomingEvents from './components/MyUpcomingEvents';
import Navbar from '../common/Navbar';

class EventsPage extends Component {

  componentDidMount() {
    const userId = sessionStorage.getItem('userId');
    this.props.fetchMyUpcomingEvents(userId);
    this.props.fetchUpcomingEvents();
    this.props.fetchNotifications(userId);
  }

	render () {
		const {notifications} = this.props;
    return (
			<div id="events-page">
        <Navbar history={this.props.history} notifications={notifications}/>
				<MyUpcomingEvents myUpcomingEvents={this.props.myUpcomingEvents} />
				<AllUpcomingEvents upcomingEvents={this.props.upcomingEvents} />
				<AddEvent history={this.props.history}/>
			</div>
		);
	}
}

function mapStateToProps({myUpcomingEvents, upcomingEvents, notifications}) {
    return {myUpcomingEvents, upcomingEvents, notifications};
}

export default connect(mapStateToProps, {fetchMyUpcomingEvents, fetchUpcomingEvents, fetchNotifications})(EventsPage);
