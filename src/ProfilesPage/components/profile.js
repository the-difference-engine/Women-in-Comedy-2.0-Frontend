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

	return(
		<div className="container">
			<div className="box_a">
				<p id="current-profile"> {currentProfile} </p>
			</div>
		</div>

	);
}

export default Profile;