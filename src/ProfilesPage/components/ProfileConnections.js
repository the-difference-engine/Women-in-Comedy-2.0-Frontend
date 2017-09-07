import React from 'react';
import '../css/profileconnections.css';


const ProfileConnections = (props) => {
	const shuffle = require('shuffle-array');
	// console.log(props);

	let connectionList = [];


   	const randomTen = shuffle(connectionList);

    const { userConnections } = props;
    // console.log('userConnections = props below');
    // console.log({userConnections});


	function onClickContacts() {
		// console.log('onClickContacts working');

	}



	return (
	    <div id="boop">
   			<div id="right-side-bar-content">
		    	<div className="container">
     		 		<h4>Connections({userConnections.length})</h4>
     		 		{renderConnections(userConnections)}
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
  	// console.log('renderConnections');
  	// console.log(connection);

    return (
      <div key={connection.id}>
        <p>{connection.firstName} {connection.lastName}</p>
      </div>
    );
  });
}


export default ProfileConnections;
