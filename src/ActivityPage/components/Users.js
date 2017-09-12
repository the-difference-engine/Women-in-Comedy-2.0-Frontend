import _ from 'lodash';
import React from 'react';
import '../css/users.css';

const Users = (props) => {
 	const { usersInfo } = props;
    console.log('usersInfo belowbruno');
    console.log({usersInfo});
    const list = renderUsers(usersInfo);
    const connections = list.length;

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

  const users = usersInfo;

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

	const listMaker = getUsers([], users, 0)



	return (
	    <div id="activity-users">
	    	<div className="container">
		    	<h4> <span>Connections({connections})</span></h4>
		    </div>
		    <div className="user-list">
		    	<div id="right-side-bar">
				    	<p> {listMaker} </p>
			    </div>
			</div>
	    </div>
  	);
}



const renderUsers = (users) => {
  return users.map(user => {
    return (
      <div key={user.id}>
      	<div id="user-pic" class="col-md-1"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /><a href={"http://localhost:3000/profile/" + user.id}>{user.firstName} {user.lastName}</a>
      	</div>
      </div>
    );
  });
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






  		// return (
 	 	// 		<div className="container">	    		
	  	// 			<div key={user.id}>
				// 	 	<div id="user-pic" class="col-md-1"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /><a href={"http://localhost:3000/profile/" + user.id}>{user.name}</a>
				// 	 	</div>
				// 	 </div>
    // 			</div>
  		// );



	// return (
	//     <div id="activity-users">
	//     	<div className="container">
	// 	    	<h4> <span>Connections({connections})</span></h4>
	// 	    </div>
	// 	    <div className="user-list">
	// 		    <div className="container">
	// 		    	<p> {userList} </p>
	// 		    </div>
	// 		</div>
	//     </div>
 //  	);
