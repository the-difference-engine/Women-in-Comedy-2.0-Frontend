import React, { Component } from 'react';
import './css/feed.css';

class Comment extends Component {

    render() {
        return (
            <div id="comment">
                <p id="feed-news">
                <img src="http://cms.hostelbookers.com/hbblog/wp-content/uploads/sites/3/2012/02/cat-happy-cat-e1329931204797.jpg" alt="" />
                This is a comment
                </p>
            </div>
        );
    }
}

export { Comment };