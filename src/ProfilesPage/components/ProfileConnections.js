import _ from 'lodash';
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

	let connectionList = [];
    
    const { userConnections } = props;
    console.log('userConnections = props below');
    console.log({userConnections});
    let newArray = [];

//Dont worry about the following function, randomizer
          	function getRandom(arr, n) {
              	var result = new Array(n),
              	    len = arr.length,
                  	taken = new Array(len);
              	while (n--) {
              	    var x = Math.floor(Math.random() * 1);
              	    result[n] = arr[x in taken ? taken[x] : x];
              	    taken[x] = --len;
              	}
                console.log('newArray below');
                console.log(newArray);
              	return newArray.push(result);

          	}


  function getUsers(result, users, count) {
    if(users.length === 0 || count === 10) {
      return result;
    } else {
      var x = Math.floor(Math.random() * users.length);
      console.log('x below');
      console.log(x);
      result.push(users.splice(x, 1)[0]);
      console.log('result below');
      console.log(result);
      ++count;


      getUsers(result, users, count);
    }
  }

  const users = userConnections;
  const whatever = getUsers([], users, 0);

  const renderWhatever = renderConnections(whatever);



  function onClickContacts() {
    console.log('onClickContacts working');
    // changeStatus();
  }

  let displayedConnections = 0
  // const allUsers = renderConnections(userConnections);
	const tenRandom = getRandom(renderConnections(userConnections), 10);
  // if (userConnections.length >= 10) {
  //   displayedConnections = 10
  // } else {
  //   displayedConnections = userConnections.length
  // };
 

	return (
	    <div id="boop">
   			<div id="right-side-bar-content">
		    	<div className="container">
     		 		<h4>Connections({userConnections.length})</h4>
			    </div>


		   		<div className="user-list">
			    	<div className="container">
			    		<div>{renderWhatever}</div>
			    	</div>
				  </div>
          <div className="onclick" onClick={onClickContacts}><p className="red">See All Connections</p>
          </div>

		   	</div>
	    </div>
  	);
}



const renderConnections = (connections) => {
  return _.map(connections, connection => {

      return (
        <div key={connection.id}>
          <div id="user-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /><a href={"http://localhost:3000/profile/" + connection.id}>{connection.firstName} {connection.lastName}</a>
          </div>

        </div>
      );
  });

}

export default ProfileConnections;