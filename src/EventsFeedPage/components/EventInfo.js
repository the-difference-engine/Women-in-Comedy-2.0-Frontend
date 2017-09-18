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
        {renderButton(props)}
      </div>
    );
  }
  return <div></div>
};

const renderButton = (props) => {
  for(var i = 0; i < props.event.guests.length; i++) {
    if (props.event.guests[i].user_id === props.userInfo.id) {
      return <button onClick={() => props.unattendEvent(props.event.guests[i].id, props.event.info.id, props.fetchEventInfo)}> Unattend</button>
    }
  }
  return <button onClick={() => props.attendEvent(props.userInfo, props.eventId, props.fetchEventInfo)}> Attend </button>;
}




export default EventInfo;
