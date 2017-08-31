import React from 'react';
import '../css/profileconnections.css';


const ProfileConnections = (props) => {
	const shuffle = require('shuffle-array');
	// console.log(props);

	let connectionList = [];
    
    const { userConnections } = props;
    console.log('userConnections = props below');
    console.log({userConnections});

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

  const displayNames = renderConnections(userConnections);

  let displayedConnections = 0

  if (userConnections.length >= 10) {
    displayedConnections = 10
  } else {
    displayedConnections = userConnections.length
  };

  const randomTen = getRandom(displayNames, displayedConnections);

  const switcher = (randomTen);

  function onClickContacts() {
    console.log('onClickContacts working');
  }  


	return (
	    <div id="boop">
   			<div id="right-side-bar-content">
		    	<div className="container">
     		 		<h4>Connections({userConnections.length})</h4>
     		 		{switcher}
			    </div>


		   		<div className="user-list">
			    	<div className="container">
			    		<p></p>
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
  	console.log('renderConnections');
  	console.log(connection);

    return (
      <div key={connection.id}>
        <p>{connection.firstName} {connection.lastName}</p>
      </div>
    );
  });
}

export default ProfileConnections;