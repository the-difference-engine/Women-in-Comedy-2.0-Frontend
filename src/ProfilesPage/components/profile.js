import React from 'react';
import '../css/profile.css';

const Profile = (props) => {
	let connections = 0;
	const currentProfile = props.events.map((user, index) => {
		console.log('Working');
		console.log(user);
		console.log(index + 1);

		return(
 	 		<div className="container">
 	 			<div key={user.id}>
 	 				<div id="profile_info">
	 	 				<p>{user.first_name}</p>
 		 				<p>{user.about}</p>
 		 			</div>
 	 			</div>
 	 		</div>	    		


		);
	})

	return(
		<div className="container">
			<p> {currentProfile} </p>
		</div>

	);
}

export default Profile;