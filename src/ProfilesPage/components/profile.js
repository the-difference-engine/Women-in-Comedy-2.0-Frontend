import React from 'react';
import '../css/profile.css';


const Profile = (props) => {
  const { userEvents } = props;
  console.log('userEvents Below');
  console.log({ userEvents });

  if (!userEvents) {
    return (
      <div id="personal-feed">
        <div className="event">
          <div className="event-page-content">
            <p>No Events Avaliable</p>
          </div>
        </div>
      </div>
    );
  };



  const renderEvents = (events) => events.map((event) => 
    <div key={event.id}>
          <div className="box" id="personal-feed" >
            <div>
              <h4>Event</h4>
              <div className="event">
                <div className="events-header">
                  <p className="event-title">Author: {event.authorFirstName}</p>
                </div>
                <div className="event-page-content">
                  <p className="event-title">{event.title}
                    <img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" height="200" width="205"/>
                  </p>
                </div>
                <div className="event-page-content">
                  <p>{event.about}</p>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
  const renderer = renderEvents(props.userEvents);





  return(
    <div className="container">
      <div className="box_a">
        <div id="current-profile"> {renderer} </div>
      </div>
    </div>

  );

};

export default Profile;