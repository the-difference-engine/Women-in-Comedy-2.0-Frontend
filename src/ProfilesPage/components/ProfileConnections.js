import React from 'react';
import '../css/profileconnections.css';


const ProfileConnections = (props) => {

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
	function clickChange() {
		console.log('clickChange');
		// not effective
		// if(counter > 0) {
		// 	statusHolder = tenRandom;
		// 	--counter;
		// } else {
		// 	statusHolder = connectionsList;
		// 	++counter;
		// }


	}

	function onClickContacts() {
		console.log('onClickContacts working');
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
var myVar = setInterval(myTimer, 2000);
function myTimer() {
	console.log('timer activated');
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