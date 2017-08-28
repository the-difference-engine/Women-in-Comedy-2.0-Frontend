import React from 'react';
import '../css/profile.css';


const Profile = (props) => {

	const query = window.location.pathname;
	const new_query = query.slice(9);
	console.log('new query below');
	console.log(new_query);


	return(
		<div className="container">
			<div className="box_a">
				<p id="current-profile"> </p>
			</div>
		</div>

	);
}

export default Profile;