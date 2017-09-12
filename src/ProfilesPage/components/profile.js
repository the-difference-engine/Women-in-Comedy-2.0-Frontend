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
                    <img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" height="200" width="205"/>
                  <p className="event-title">{event.title}</p>
                </div>
                <div className="event-page-content">{event.about}
                </div>
              </div>
            </div>
          </div>
    </div>
  );
  const renderer = renderEvents(userEvents);






  return(
    <div className="container">
      <div className="box_a">
        <div id="current-profile"> {renderer} </div>
      </div>
    </div>

  );

};

export default Profile;