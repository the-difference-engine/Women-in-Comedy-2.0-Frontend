import React from 'react';
import '../css/event-info.css';
import UpdateEventButton from './UpdateEventButton.js'

const EventInfo = ({ event, userInfo, unattendEvent, attendEvent, eventId, fetchEventInfo}) => {
  const renderButton = ({ event, userInfo, unattendEvent, attendEvent, eventId, fetchEventInfo }) => {
    for(var i = 0; i < event.guests.length; i++) {
      if (event.guests[i].user_id === userInfo.id) {
        return <button onClick={() => unattendEvent(event.guests[i].id, event.info.id, fetchEventInfo)}> Unattend</button>
      }
    }
    return <button className="btn btn-default" onClick={() => attendEvent(userInfo, eventId, fetchEventInfo)}> ATTEND </button>;
  };

  const renderUpdateEvent = ({ event, userInfo, eventId }) => {
    if (event.hostInfo.id === userInfo.id || userInfo.admin === true){ 
      return(
        <UpdateEventButton id="edit_btn" eventId={eventId} event={event}/>
      )
    }
  };

  if(event && event.hostInfo) {
    const { title, date, time, location, about, ticket_link, user_id, photo } = event.info;
    const { firstName, lastName } = event.hostInfo;
    return (
      <div>
        <h2 id="event-title">{title}</h2>
        {photo != undefined && <img width="100" height="100" src={photo} />}
        <h2 id="event-details"> Host: {firstName} {lastName}</h2>
        <h2 id="event-date">{date} at {time}</h2>
        <h3 id="event-location">{location}</h3>
        <a><p id="event-ticket_link">{ticket_link}</p></a>
        <p id="event-desc">{about}</p>
        
        {renderButton({ event, userInfo, unattendEvent, attendEvent, eventId, fetchEventInfo })}
        {renderUpdateEvent({ event, userInfo, eventId})}

      </div>
    );
  }
  return <div></div>
};
export default EventInfo;
