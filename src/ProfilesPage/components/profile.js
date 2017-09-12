import React from 'react';
import '../css/profile.css';


const Profile = (props) => {
  const { userFeeds } = props;
  console.log('usearFeeds Below');
  console.log({ userFeeds });


  console.log('renderer below');
  console.log(renderer);





  if (userFeeds.length == 0) {
    return (
      <div id="personal-feed">
        <div className="event">
          <div className="event-page-content">
            <p>No Feeds Avaliable</p>
          </div>
        </div>
      </div>
    );
  };



  const renderFeeds = (feeds) => feeds.map((feed) => 
    <div key={feed.postId}>
          <div className="box" id="personal-feed" >
            <div>
              <h4>Event</h4>
              <div className="event">
                <div className="events-header">
                  <p className="event-title">Author: {feed.authorFirstName}</p>
                </div>
                <div className="event-page-content">
                  <p>{feed.body}</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
  const renderer = renderFeeds(props.userFeeds);





  return(
    <div className="container">
      <div className="box_a">
        <div id="current-profile"> {renderer} </div>
      </div>
    </div>

  );

};

export default Profile;