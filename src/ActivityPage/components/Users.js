import React from 'react';
import '../css/users.css';

const Users = (props) => {

	// console.log(props);

	let connections = 0;
	const userList = props.events.map((user, index) => {
		connections = index + 1;
		console.log('index below');
		console.log(index + 1);
  		return (
 	 			<div className="container">	    		
	  				<div key={user.id} className="col-xs-offset-1 col-xs-2">
					 	<div id="user-pic" class="col-md-1"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />{user.name}</div>
					 </div>
    			</div>
  		);
	})

	return (
	    <div id="activity-users">
	    	<div className="container">
		    	<h4> Connections({connections})</h4>
		    </div>
		    <div className="container">
		    	<p> {userList} </p>
		    </div>
	    </div>
  	);
}

export default Users;




// import React from 'react';
// import '../css/users.css';

// export default (props) => {
// 	const userList = props.events.map((user) => {
// 		console.log(user);
// 		return (
//     		<div id="activity-users">
//     			<div key={user.id} classname="col-xs-offset-1 col-xs-3">
//     			{user.name}
//     			{user.photo}

//     			</div>
//     		</div>
//  	 	);
// 	})
// }	


      // <div className="activity-users-content">
      //   <div id="bio-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />Mary Swanson</div>
      //   // <div className="users-name"><p></p></div>
      // </div>

