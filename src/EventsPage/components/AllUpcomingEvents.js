import React from 'react';
import { Link } from 'react-router-dom';
import '../css/events.css';
import _ from 'lodash';


const sortByDate = (events = []) => (_.orderBy(events, 'date', 'desc'))

export default (props) => {
	if (props.upcomingEvents.length === 0) {
		return <div></div>
	}
	return (
		<div className="event-page-content">
			<div>
				<div className="row events-grid" id="all-events">
					<div className="col-xs-offset-1 col-xs-3">
						<h1 className="events-header">All Upcoming Events</h1>
					</div>
				</div>
				<div className="row">
					{renderEventList(sortByDate(props.upcomingEvents))}
				</div>
			</div>
		</div>
	);
}

const renderEventList = (events) => {
	return events.map(event => {
		return (
			<div key={event.id} className="col-xs-offset-1 col-xs-3">
				<Link to={`/eventsfeed/${event.id}`}>
					<div className="event">
						<div className="event-pic"> <img className="img-responsive" src={event.photo} /></div>
						<div className="event-title"><p>{event.title}</p></div>
						<div className="event-time"><p>{event.date} <br/> {event.time}</p></div>
					</div>
				</Link>
	 		</div>
		);
	});
};