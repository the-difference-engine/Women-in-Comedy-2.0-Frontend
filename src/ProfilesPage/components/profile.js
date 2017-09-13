import React from 'react';
import '../css/profile.css';


const Profile = (props) => {
  const { userFeeds } = props;
  console.log('userFeeds Below');
  console.log({ userFeeds });

  if (userFeeds.length === 0) {
    return (
      <div id="personal-feed">
        <div className="no-feed">
            <p>No Feeds Avaliable</p>
        </div>
      </div>
    );
  };



  const renderFeeds = (feeds) => feeds.map((feed) => 
    <div key={feed.id}>

          <div className="box" id="personal-feed" >
            <div>
                <div id="feed-photo-in-corner"><img src="https://u.o0bc.com/avatars/no-user-image.gif" height="35px" width="35px" alt=""/></div>
              <div className="feed">
                <div className="feeds-header">
                  <p className="feed-title"><span>{feed.authorFirstName}</span> commented on your <span>post</span></p>
                  <p className="feed-page-content">{feed.body}</p>
                </div>



              </div>
            </div>
          </div>
    </div>
  );






  return(
    <div className="box_a">
      <div className="container">
        <h2 className="your-activity"> Your Activity </h2>

        <div id="current-profile"> {renderFeeds(userFeeds)} </div>
      </div>
    </div>

  );

};

export default Profile;