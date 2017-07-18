import React from 'react';
import '../css/events.css';

export default (props) => {
	console.log(props.events);
	const eventList = props.events.map((event) => {

		return(
			<div key={event.id} className="col-xs-offset-1 col-xs-3">
				<div className="event">
					<div className="event-pic"> <img className="img-responsive" src="http://www.skiheavenly.com/~/media/heavenly/images/732x260%20header%20images/events-heavenly-header.ashx" /></div>
					<div className="event-title"><p>{event.title}</p></div>
					<div className="event-time"><p>May 27 <br/> 7:30pm</p></div>
				</div>
			</div>
		);
	});
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
					{eventList}
				</div>
			</div>
		</div>
	);
};
