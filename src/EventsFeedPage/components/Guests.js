import React from 'react';
import { Link } from 'react-router-dom';
import '../css/event-guest.css'
const Guests = (props) => {

  if (props.event) {
    return (
      <div>
        <h2 id="guest-title">Guests</h2>
        {renderGuests(props.event.guests)}

      </div>
    );
  }
  return <div></div>
};

const renderGuests = (guests) => {
  return guests.map(guest => {
    return (
      <div key={guest.id} id="guest-item">
        <span id="guest-content">
          <img id="guest-img" src={guest.photo || 'https://u.o0bc.com/avatars/no-user-image.gif'}  alt='' />
          <Link to={`/profile/${guest.user_id}`}><span>{guest.first_name}</span> <span>{guest.last_name}</span></Link>
        </span>
      </div>
    )
  });
};

export default Guests;
