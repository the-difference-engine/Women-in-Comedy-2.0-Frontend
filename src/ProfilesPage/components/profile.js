import React from 'react';
import '../css/profile.css';

const Profile = (props) => {
	const shuffle = require('shuffle-array');
	const users = [];
	let connections = 0;
	const currentProfile = props.events.map((user, index) => {
		console.log('Working');
		console.log(user);
		console.log(index + 1);

		return(
 	 		<div key={user.id}>
 	 			<div className="container">
 	 				<div id="profile_info">
	 	 				<p>{user.first_name}</p>
 		 				<p>{user.about}</p>
 		 			</div>
 	 			</div>
 	 		</div>	    		


		);
	})
	const randomConnections = props.events_connections.map((user, index) => {
		users.push(user);

		return(
			<div key={user.id}>
				<div className="container">
					<div className="profile_info">
						<p>{user.id}. {user.name}</p>
					</div>
				</div>
			</div>
		);

	})
	const randomizer = shuffle(randomConnections);

	return(
		<div className="container">
			<p> {currentProfile} </p>
			<p> {randomizer} </p>



		</div>

	);
}

export default Profile;