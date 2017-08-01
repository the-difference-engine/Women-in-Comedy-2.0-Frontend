import React, { Component } from 'react';
import './css/feed.css';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false}
  }
  // showMore() {
  //   const detail = document.getElementById('feed-detail');
  //   detail.style.maxHeight = 'none';
  // }

  render() {

    return (
      <div id='feed'>
        <img id="post-pro-img" src="http://cms.hostelbookers.com/hbblog/wp-content/uploads/sites/3/2012/02/cat-happy-cat-e1329931204797.jpg" alt="" />
        <div id='feed-content'>
          <p id="feed-news"><span>User</span> commented on your <span>post</span></p>
          <div id="wrap">
            <p id="feed-detail"> Lorem ipsum ng elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            {/* <a href="#" onClick={this.showMore}>...read more</a> */}
          </div>
          <div id="feed-icons">
            <a href="#"><span className="glyphicon glyphicon-comment"></span> <span className="icon-stats">1</span></a>
            <a href="#"><i className="fa fa-thumbs-up" aria-hidden="true"></i> <span className="icon-stats">2</span></a>
          </div>
          <div id="feed-input">
            <img src="http://cms.hostelbookers.com/hbblog/wp-content/uploads/sites/3/2012/02/cat-happy-cat-e1329931204797.jpg" alt="" />
            <input placeholder="comment" />
          </div>
        </div>
      </div>
    );
  }
}



export { Feed };
