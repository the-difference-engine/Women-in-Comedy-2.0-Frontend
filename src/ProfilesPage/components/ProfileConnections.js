import React from 'react';
import '../css/profileconnections.css';

const ProfileConnections = (props) => {
	const shuffle = require('shuffle-array');


	const randomConnections = props.events_connections.map((user, index) => {
		console.log('user below');
		console.log(user);

		return(
			<div key={user.id}>
						<div id="right-side-bar">
							<div id="right-side-bar-content">
								<div id="user-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /><a href={"http://localhost:3000/profile/" + user.id}>{user.name}</a>
								</div>
							</div>
						</div>
			</div>
		);

	})
	const randomizer = shuffle(randomConnections);


  return (
		<div className="random">
				<p> {randomizer} </p>
		</div>
  );
}
export default ProfileConnections;
