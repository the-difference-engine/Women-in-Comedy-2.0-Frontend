import React from 'react';
import '../css/profileconnections.css';


 const ProfileConnections = (props) => {
	// constructor(props) {
	// 	super(props);

	// 	this.state = { statusHolder: tenRandom }

	// 	this.changeStatus = this.changeStatus.bind(this);
	// }

	// changeStatus(event) {
	// 	if(this.state.statusHolder === tenRandom) {
	// 		this.setState({ statusHolder: userConnections});
	// 	} else if(this.state.statusHolder === userConnections) {
	// 		this.setState({ statusHolder: tenRandom });
	// 	}
	// }

	const shuffle = require('shuffle-array');
	// console.log(props);

 
   	// const randomTen = shuffle(connectionList);
    const { userConnections } = props;
    console.log('userConnections = props below');
    console.log({userConnections});



	function getRandom(arr, n) {
    	var result = new Array(n),
    	    len = arr.length,
        	taken = new Array(len);
    	while (n--) {
    	    var x = Math.floor(Math.random() * len);
    	    result[n] = arr[x in taken ? taken[x] : x];
    	    taken[x] = --len;
    	}
    	return result;
	}
    console.log('is this where it works??');
	const connectionsList = renderConnections(userConnections);
	const tenRandom = getRandom(connectionsList, 10);
	let statusHolder = tenRandom;
	let counter = 0


	function onClickContacts() {
		console.log('onClickContacts working');
		// changeStatus();
	}



	return (
	    <div id="boop">
   			<div id="right-side-bar-content">
		    	<div className="container">
     		 		<h4>Connections({userConnections.length})</h4>
     		 		
			    </div>


		   		<div className="user-list">
			    	<div className="container">
			    		<p>{statusHolder}</p>
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


const renderConnections = (connections) => {
  return connections.map(connection => {


    return (
      <div key={connection.id}>
        <div id="user-pic" class="col-md-1"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /><a href={"http://localhost:3000/profile/" + connection.id}>{connection.firstName} {connection.lastName}</a>
		</div>

      </div>
    );
  });
}


export default ProfileConnections;