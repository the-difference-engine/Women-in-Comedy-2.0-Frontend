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

  return (
    <div id="activity-users">
    	<div id="bio-pic-users"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /></div>
    	<div className="users-name"><p> Mary Swanson</p></div>
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

