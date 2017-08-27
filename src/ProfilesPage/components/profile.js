import React from 'react';
import '../css/profile.css';


const Profile = (props) => {

	const query = window.location.pathname;
	const new_query = query.slice(9);
	console.log('new query below');
	console.log(new_query);

	const currentProfile = props.events.map((user, index) => {
		if (user.id === parseInt(new_query)) {
			console.log('Working');
			console.log('user below');
			console.log(user);

			return(
	 	 		<div key={user.id}>
	 	 			<div className="box" id="personal-feed" >
	 	 				<div>
	 	 					<p>Upcoming Events</p>
		 	 				<div className="event">
			 	 				<div className="events-header">
			 	 					<p className="event-title">Event Title</p>
			 	 				</div>
			 	 				<div className="event-page-content">
			 	 					<p>Event description goes here!</p>
			 	 				</div>
		 		 			</div>
		 		 		</div>
		 		 		<div>
		 		 			<p>Past Events</p>
		 		 			<div className="event">
			 	 				<div className="events-header">
			 	 					<p className="event-title">Event Title</p>
			 	 				</div>
			 	 				<div className="event-page-content">
			 	 					<p>Event description goes here!</p>
			 	 				</div>
		 		 			</div>
		
		 		 			<div className="event">
			 	 				<div className="events-header">
			 	 					<p className="event-title">Event Title</p>
			 	 				</div>
			 	 				<div className="event-page-content">
			 	 					<p>Event description goes here!</p>
			 	 				</div>
		 		 			</div>
	 	 				</div>
	 	 			</div>
	 	 		</div>
			);
		}
	})

	return(
		<div className="container">
			<div className="box_a">
				<p id="current-profile"> {currentProfile} </p>
			</div>
		</div>

	);
}

export default Profile;