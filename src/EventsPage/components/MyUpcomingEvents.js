import React from 'react';
import { Link } from 'react-router-dom';
import '../css/events.css';

export default (props) => {
	if (props.myUpcomingEvents.length === 0) {
		return <div></div>
	}
	return (
		<div className="event-page-content" >
			<div className="container">
				<div className="row events-grid" id="my-events">
					<div className="col-xs-offset-1 col-xs-3">
						<h1 className="events-header">My Upcoming Events </h1>
					</div>
					<div id="events-search-bar">
						<div className="col-xs-offset-4 col-xs-4">
							<div className="input-group">
								<input type="text" className="form-control" placeholder="Find Events"/>
								<i className="glyphicon glyphicon-search"></i>
							</div>
						</div>
					</div>
				</div>
				<div className="row">
					{renderEventList(props.myUpcomingEvents)}
				</div>
			</div>
		</div>
	);
};

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