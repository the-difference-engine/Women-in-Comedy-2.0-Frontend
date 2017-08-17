import React from 'react';
import '../css/profile.css';


const Profile = (props) => {
	const shuffle = require('shuffle-array');

	let users = [];
	let connections = 0;
	const query = window.location.pathname;
	const new_query = query.slice(9) 
	console.log('new query below');
	console.log(new_query);

	const currentProfile = props.events.map((user, index) => {
		if (user.id === parseInt(new_query)) {
			console.log('Working');
			console.log('user below');
			console.log(user);

			return(
	 	 		<div key={user.id}>
	 	 			<div className="box">
	 	 				<div id="profile_info">
		 	 				<p>{user.id}</p>
		 	 				<p>{user.first_name}</p>
		 	 				<p>{user.last_name}</p>
		 	 				<p>{user.city}</p>
		 	 				<p>{user.about}</p>
		 	 				<a href="mailto:foodbylags@gmail.com" target="_top"><p>{user.email}</p></a>
	 		 			</div>
	 	 			</div>
	 	 		</div>	    		


			);
		}
	})
	
	const randomConnections = props.events_connections.map((user, index) => {
		users.push(user);
		console.log('users below');
		console.log(users);

		return(
			<div key={user.id}>
				<div className="container">
					<div className="profile_info_connections">
						<span><div id="user-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /><a href={"http://localhost:3000/profile/" + user.id}>{user.name}</a>
						</div></span>
					</div>
				</div>
			</div>
		);

	})
	const randomizer = shuffle(randomConnections);

	return(
		<div className="container">
			<div className="box_a">
				<p id="current-profile"> {currentProfile} </p>
			</div>

			<div className="box_b">
					<p id="randomizer"> {randomizer} </p>
			</div>
		</div>

	);
}

export default Profile;