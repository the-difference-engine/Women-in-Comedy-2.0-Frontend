import React from 'react';
import { Feed } from '../../common';
const ProfileFeed = (props) => {
  console.log(props.feeds);
  if (props.feeds) {
    return (
      <div>
        {renderFeed(props.feeds)}
      </div>
    );
  }
  return <div></div>
};

const renderFeed = (feeds) => {
  return feeds.map(feed => {
    return <Feed key={feed.postId} feed={feed}/>
  });
}
export default ProfileFeed;
