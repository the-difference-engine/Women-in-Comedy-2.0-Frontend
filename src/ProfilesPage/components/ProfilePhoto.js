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
	 	 			<div className="photo" id="left-side-bar-content">
						<div className="profile-photo"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt=""/></div>
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
		 	 				<p><span>ID:</span> {user.id}</p>
		 	 				<p><span>Name:</span> {user.first_name} {user.last_name}</p>
		 	 				<p><span>City:</span> {user.city}</p>
		 	 				<p><span>About:</span> {user.about}</p>
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