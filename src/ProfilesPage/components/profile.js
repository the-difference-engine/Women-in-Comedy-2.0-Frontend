import React from 'react';
import '../css/profile.css';


const Profile = (props) => {
  const { userFeeds } = props;
  if (userFeeds.length == 0) {
    return (
      <div id="feed-none">
        <p>No Feeds Avaliable</p>
      </div>
    )
  }


	return(
		<div className="box" id="personal-feed">
				<p>{renderFeeds(props.userFeeds)}</p>
		</div>

	);
}
const renderFeeds = (feeds) => feeds.map((feed) => <div key={feed.postId} feed={feed}/>);

export default Profile;