import React from 'react';
import { Link } from 'react-router-dom';
import '../css/events.css';
import _ from 'lodash';

const sortByDate = (events = []) => (_.orderBy(events, 'date', 'desc'))

var today = new Date();
var dd = today.getDate();
var mm = today.getMonth()+1; //January is 0!
var yyyy = today.getFullYear();

if(dd<10) {
    dd = '0'+dd
} 

if(mm<10) {
    mm = '0'+mm
} 

today = mm + '/' + dd + '/' + yyyy;
console.log(today.toString())

export default (props) => {
	if (props.myUpcomingEvents.length === 0) {
		return <div></div>
	}
	return (
		<div className="event-page-content" >
			<div>
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
					{sortByDate(renderEventList(props.myUpcomingEvents))}
				</div>
			</div>
		</div>
	);
};


const renderEventList = (events) => {
	return events.map(event => {
		if (event.date < today)
		{
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
		)};
	});
};