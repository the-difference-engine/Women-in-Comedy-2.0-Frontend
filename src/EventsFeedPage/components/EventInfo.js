import React from 'react';
import '../css/event-info.css';
import UpdateEventButton from './UpdateEventButton.js'

//working code by James :)
const EventInfo = ({ event, userInfo, unattendEvent, attendEvent, eventId, fetchEventInfo}) => {
  const renderButton = ({ event, userInfo, unattendEvent, attendEvent, eventId, fetchEventInfo }) => {
    for(var i = 0; i < event.guests.length; i++) {
      if (event.guests[i].user_id === userInfo.id) {
        return <button onClick={() => unattendEvent(event.guests[i].id, event.info.id, fetchEventInfo)}> Unattend</button>
      }
    }
    return <button onClick={() => attendEvent(userInfo, eventId, fetchEventInfo)}> Attend </button>;
  };

  const renderUpdateEvent = ({ event, userInfo, eventId }) => {
    if (event.hostInfo.id === userInfo.id){
      return(
        <UpdateEventButton id="edit_btn" eventId={eventId}/>
      )
    }
    return <button onClick={() => attendEvent(userInfo, eventId, fetchEventInfo)}> Attend </button>;
  };

  const formatUrl = (url) => {
    if (!/^https?:\/\//i.test(url)) {
      url = 'http://' + url;
    }
    return url;
  }

  if(event && event.hostInfo) {
    const { title, date, time, location, about, ticket_link, user_id } = event.info;
    const { photo, firstName, lastName } = event.hostInfo;
    return (
      <div>
        <h2 id="event-title">{title}</h2>
        <img src={photo} width="100" height="100" alt=""/>
        <h2 id="event-details"> Host: {firstName} {lastName}</h2>
        <h2 id="event-date">{date} at {time}</h2>
        <h3 id="event-location">{location}</h3>
        <a href={formatUrl(ticket_link)} target="_blank" id="event-ticket_link">{ticket_link}</a>
        <p id="event-desc">{about}</p>
        
        {renderButton({ event, userInfo, unattendEvent, attendEvent, eventId, fetchEventInfo })}
        {renderUpdateEvent({ event, userInfo, eventId})}

      </div>
    );
  }
  return <div></div>
};
export default EventInfo;
