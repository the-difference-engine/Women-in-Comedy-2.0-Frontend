import React from 'react';
import { Link } from 'react-router-dom';
import '../css/messages.css';

const Messages = (props) => {
  return (
    <div>
      <p id="next-event">Next Event</p>
      <Link to="/events" id="events-link">View Upcoming Events</Link>
    </div>
  );
};

export default Messages;
