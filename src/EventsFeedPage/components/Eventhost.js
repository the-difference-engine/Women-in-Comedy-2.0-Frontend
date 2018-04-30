import React from 'react';
import '../css/event-info.css';

//THIS FILE NOT IN USE

const EventImg = (props) => {
  console.log('eventimgprop', props);
  if(props.event) {
    const { photo } = props.event.info;
    return (
      <div>
        <div id="event-pic"> <img src={ photo } width="1150" height="200" alt="" /></div>
      </div>
    );
  }
  return <div></div>
};

export default EventImg;