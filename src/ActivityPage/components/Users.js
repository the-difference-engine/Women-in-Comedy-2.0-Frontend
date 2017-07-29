import React from 'react';
import '../css/users.css';

const Users = (props) => {

	// console.log(props);

	let connections = 0;
	const userList = props.events.map((user, index) => {
		connections = connections + index
		console.log('sazdsafda');
		console.log('index below');
		console.log(index);
		console.log('connections below');
		console.log(connections);
  		return (
  			<div class="box">
	    		<div key={user.id} className="col-xs-offset-1 col-xs-3">
	 				<div id="user-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
	    				<p>{user.name} </p>
	    			</div>
    			</div>
    		</div>
  		);
	})
	console.log('userList[0] below');
	console.log(userList[0]);

	return (
	    <div id="activity-users">
	    	<div className="user"><p>{userList}</p></div>
	    	<p> Connections({connections}) </p>
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

