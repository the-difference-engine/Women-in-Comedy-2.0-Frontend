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

	function getRandom(arr, n) {
    	var result = new Array(n),
    	    len = arr.length,
        	taken = new Array(len);
    	if (n > len)
    	    throw new RangeError("getRandom: more elements taken than available");
    	while (n--) {
    	    var x = Math.floor(Math.random() * len);
    	    result[n] = arr[x in taken ? taken[x] : x];
    	    taken[x] = --len;
    	}
    	return result;
	}

	const tenRandom = getRandom(userList, 10);


	function onClickContacts() {
		console.log('onClickContacts working');

	}



	return (
	    <div id="boop">
   			<div id="right-side-bar-content">
		    	<div className="container">
			    			<h4><span>Connections({connections})</span></h4>
			    </div>


		   		<div className="user-list">
			    	<div className="container">
			    		<p> {tenRandom} </p>
			    	</div>
					<div className="onclick">

						<p className="red"
						   onClick={onClickContacts}>See All Connections</p>
					</div>
				</div>

		   	</div>
	    </div>
  	);
}

export default ProfileConnections;