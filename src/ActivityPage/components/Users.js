import React from 'react';
import '../css/users.css';

const Users = (props) => {
	console.log(props);

	const userList = props.events.map((user) => {
		console.log(user);
  		return (
    		<div id="activity-users">

    		</div>
  		);
	})
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


