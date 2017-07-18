import React from 'react';
import '../css/add-events.css';


export default (props) => {
  return (
    <div className="add-event">
      <div className="add-event-content">
        <div className="upcoming-events"><p>Upcoming Events</p></div>
        <div className="past-events"><p>Past Events</p></div>
        <div className="new-event"><button className="btn btn-default"type="button">+ NEW EVENT</button></div>
      </div>
    </div>
  );
};
