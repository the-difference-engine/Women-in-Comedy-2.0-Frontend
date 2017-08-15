import React from 'react';
import '../css/profiles.css';

const Profiles = (props) => {
	let connections = 0;
	const currentProfile = props.events.findBy(id: 1) => {
		console.log('Working');
	}
		return(
 	 		<div className="container">
 	 			<div>
 	 				{user.name}
 	 			</div>
 	 			<div>
 	 				{user.about}
 	 			</div>
 	 		</div>	    		


		)
	)

	return(
		<div className="container">
			<p> {currentProfile} </p>
		</div>

	);
}

export default Profiles;