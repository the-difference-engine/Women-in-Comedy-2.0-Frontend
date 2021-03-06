import React from 'react';
import './css/feed-post-bar.css';
const FeedPostBar = (props) => {
  return (
    <div className="feed-post-bar">
      <div className="wrap">
        <div className="activity-title"><h3>{props.pageTitle}</h3></div>
        <div className="search">
          <input type="text" className="searchTerm" placeholder="What's New?" onChange={(event) => props.inputChange(event.target.value)}/>
          <div className="post-button"><button className="btn btn-default"type="button">POST</button></div>
        </div>
      </div>
    </div>
  );
}
export { FeedPostBar };
