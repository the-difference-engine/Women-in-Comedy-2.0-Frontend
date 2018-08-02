import React, { Component } from 'react';
import Feed from '../../common/Feed';
import '../css/new-feeds.css';


class NewFeeds extends Component {
  renderPosts() {
    if (this.props.event) {
      return this.props.event.posts.map(post => <Feed key={post.postId} feed={post} />)
    }
    return <div></div>
  }
  render() {
    return ( <div className="event-comment">
      <div id="new-feeds-container">
        {this.renderPosts()}
      </div>
      </div>
    );
  }
};

export default NewFeeds;