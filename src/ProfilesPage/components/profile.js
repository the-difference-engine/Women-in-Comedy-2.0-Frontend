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
              <p>Event</p>
              <div className="event">
                <div className="events-header">
                  <p className="event-title"></p>
                </div>
                <div className="event-page-content">
                  <p></p>
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
        <p id="current-profile"> {renderer} </p>
      </div>
    </div>

  );

};

export default Profile;