import React from 'react';
import '../css/event-info.css';

const EventInfo = (props) => {

  const renderButton = (props) => {
    for(var i = 0; i < props.event.guests.length; i++) {
      if (props.event.guests[i].user_id === props.userInfo.id) {
        return <button onClick={() => props.unattendEvent(props.event.guests[i].id, props.event.info.id, props.fetchEventInfo)}> Unattend</button>
      }
    }
    return <button onClick={() => props.attendEvent(props.userInfo, props.eventId, props.fetchEventInfo)}> Attend </button>;
  };

  if(props.event && props.event.hostInfo) {
    const { title, date, time, location, about, ticket_link, user_id } = props.event.info;
    const { photo, firstName, lastName } = props.event.hostInfo;

    return (
      <div>
        <h2 id="event-title">{title}</h2>
        <img src={photo} width="100" height="100" alt=""/>
        <h2 id="event-details"> Host: {firstName} {lastName}</h2>
        <h2 id="event-date">{date} at {time}</h2>
        <h3 id="event-location">{location}</h3>
        <a><p id="event-ticket_link">{ticket_link}</p></a>
        <p id="event-desc">{about}</p>
        
        {renderButton(props)}
      </div>
    );
  }
  return <div></div>
};





export default EventInfo;
