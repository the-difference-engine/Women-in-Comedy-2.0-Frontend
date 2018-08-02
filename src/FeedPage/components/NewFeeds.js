import React, { Component } from 'react';
import Feed from '../../common/Feed';
import '../css/new-feeds.css';

class NewFeeds extends Component {
  renderFeeds() {
    return this.props.userFeeds.map(feed => <Feed key={feed.postId} feed={feed}/>)
  }
  render() {
    return (
      <div id="new-feed-container">
        {this.renderFeeds()}
      </div>
    )
  }
};


export default NewFeeds;
