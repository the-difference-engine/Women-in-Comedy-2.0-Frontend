import React from 'react';
import { Feed } from '../../common';
import '../css/new-feeds.css';

const NewFeeds = (props) => {
  console.log('new feeds', props.userFeeds);
  const { userFeeds } = props;
  if (userFeeds.length == 0) {
    return (
      <div id="feed-none">
        <p>No Feeds Avaliable</p>
      </div>
    )
  }
  return (
    <div id="new-feed-container">
      {renderFeeds(props.userFeeds)}
    </div>
  );
};

const renderFeeds = (feeds) => feeds.map((feed) => <Feed key={feed.postId} feed={feed}/>);

export default NewFeeds;
