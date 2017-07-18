import React from 'react';
import '../css/bio.css';
const Bio = (props) => {
  return (
    <div id="activity-bio">
      <div className="activity-bio-content">
        <div id="bio-pic"><img src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" /></div>
        <div className="bio-name"><p>Mary Swanson</p></div>
        <div className="bio-title"><p>Bio</p></div>
        <div className="bio-desc"><p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit</p></div>
      </div>
    </div>
  );
}

export default Bio;
