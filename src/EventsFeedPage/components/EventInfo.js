import React from 'react';
import '../css/event-info.css';

const EventInfo = (props) => {
  if(props.event) {
    const { title, date, time, location, about } = props.event.info
    return (
      <div>
        <h2 id="event-title">{title}</h2>
        <h2 id="event-date">{date}</h2>
        <h2 id="event-time">{time}</h2>
        <h3 id="event-location">{location}</h3>
        <p id="event-desc">{about}</p>
        <button> Attend </button>
      </div>
    );
  }
  return <div></div>
};

export default EventInfo;
