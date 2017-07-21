import React from 'react';
import './css/feed-post-bar.css';
const FeedPostBar = (props) => {
  return (
    <div className="feed-post-bar">
        <div className="wrap">
        <div className="activity-title"><h3>Title</h3></div>

        <div className="search">
        <input type="text" className="searchTerm" placeholder="What's New?"></input>
        <div className="post-button"><button className="btn btn-default"type="button">POST</button></div>


 
   
</div>
        
      </div>

    </div>
  );
}
export { FeedPostBar };
