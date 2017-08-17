import React from 'react';
import '../css/profilephoto.css';


const ProfilePhoto = (props) => {
	const query = window.location.pathname;
	const new_query = query.slice(9);
	console.log('new query below');
	console.log(new_query);
	console.log('props.children below');
	console.log(props.children);



	const currentPhoto = props.events.map((user, index) => {
		if (user.id === parseInt(new_query)) {
			console.log('Working');
			console.log('user below');
			console.log(user);

			return(
	 	 		<div key={user.id}>
	 	 			<div className="photo">
						<div id="profile-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" width="220px" height="220px"/></div>
					</div>
	 	 		</div>	    		


			);
		}
	})

	const currentProfile = props.events.map((user, index) => {
		if (user.id === parseInt(new_query)) {
			console.log('Working');
			console.log('user below');
			console.log(user);

			return(
	 	 		<div key={user.id}>
	 	 				<div id="profile_info">
		 	 				<p>{user.id}</p>
		 	 				<p>{user.first_name}</p>
		 	 				<p>{user.last_name}</p>
		 	 				<p>{user.city}</p>
		 	 				<p>{user.about}</p>
		 	 				<a href="mailto:foodbylags@gmail.com" target="_top"><p>{user.email}</p></a>
	 		 			</div>
	 	 		</div>	    		
			);
		}
	})

  return (
    <div id="left-side-bar">
      <div id="left-side-bar-content">
      	{currentPhoto}
        {currentProfile}
      </div>
    </div>
  	)
}

export default ProfilePhoto;