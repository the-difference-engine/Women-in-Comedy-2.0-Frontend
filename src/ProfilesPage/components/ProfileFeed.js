import React from 'react';
import Feed from '../../common/Feed';
const ProfileFeed = (props) => {
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
