import React from 'react';
import './css/right-side-bar.css';
import shuffle from 'shuffle-array';

const ProfileConnections = (props) => {

	let users = [];
	let connections = 0;
	const query = window.location.pathname;
	const new_query = query.slice(9) 
	console.log('new query below');
	console.log(new_query);

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


  return (
    <div id="right-side-bar">
      <div id="right-side-bar-content">

      </div>
    </div>
  );
}
export default ProfileConnections;
