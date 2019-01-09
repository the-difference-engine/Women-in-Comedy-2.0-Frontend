import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMyUpcomingEvents, fetchUpcomingEvents, fetchPendingUserInvites, fetchNotifications } from '../actions';
import AddEvent from './components/AddEvent';
import AllUpcomingEvents from './components/AllUpcomingEvents';
import MyUpcomingEvents from './components/MyUpcomingEvents';
import Navbar from '../common/Navbar';

class EventsPage extends Component {

  componentDidMount() {
		const valid = sessionStorage.getItem('confirmed');
    if(valid === 'null' || !valid) {
      this.props.history.push('/');
    }
    const userId = sessionStorage.getItem('userId');
    this.props.fetchMyUpcomingEvents(userId);
		this.props.fetchUpcomingEvents();
		this.props.fetchPendingUserInvites(userId);
		this.props.fetchNotifications(userId);
  }

	render () {
		const {notifications} = this.props;
    return (
			<div className="container" id="events-page">
				<div className="row">
					<div className="col">
						<div className="row">
							<Navbar history={this.props.history} notifications={notifications}/>
						</div>
						<div className="row">
							<div className="col-sm-2 col-lg-3" id="newEventCol">
								<AddEvent history={this.props.history} invites={this.props.userInvites}/>
							</div>
							<div className="col-sm-10 col-lg-9">
								<MyUpcomingEvents myUpcomingEvents={this.props.myUpcomingEvents} />
								<AllUpcomingEvents upcomingEvents={this.props.upcomingEvents} />
							</div>
						</div>
					</div>
				</div>
			</div>	
		);
	}
}

function mapStateToProps({ myUpcomingEvents, upcomingEvents, userInvites, notifications }) {
  return { myUpcomingEvents, upcomingEvents, userInvites, notifications };
}
export default connect(mapStateToProps, { fetchMyUpcomingEvents, fetchUpcomingEvents, fetchPendingUserInvites, fetchNotifications })(EventsPage);
