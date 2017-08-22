import React from 'react';
import '../css/profileconnections.css';

const ProfileConnections = (props) => {
	const shuffle = require('shuffle-array');
	// console.log(props);

	let connections = 0;
	const userList = props.events_connections.map((user, index) => {
		connections = index + 1;
		console.log('index below');
		console.log(index + 1);
  		return (
 	 			<div className="container">	    		
	  			<div key={user.id}>
					 	<div id="user-pic" class="col-md-1"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /><a href={"http://localhost:3000/profile/" + user.id}>{user.name}</a>
					 	</div>
					</div>
    		</div>
  		);
	})
	const randomConnect = shuffle(userList);
	return (
	    <div id="right-side-bar">
	    		<div id="container">
	    			<div id="header">
		    			<h4>Connections({connections})</h4>
		    		</div>
		    		<div className="user-list">
			    		<p> {randomConnect} </p>
			    	</div>
					<div>
						<h4 className="red">See All Connections</h4>
					</div>
				</div>
	    </div>
  	);
}

export default ProfileConnections;
