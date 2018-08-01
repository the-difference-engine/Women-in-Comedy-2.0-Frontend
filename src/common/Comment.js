import React, { Component } from 'react';
import './css/feed.css';
import './css/comment.css'

class Comment extends Component {

    render() {
        return (
            <div id="comment">
                <img src="http://cms.hostelbookers.com/hbblog/wp-content/uploads/sites/3/2012/02/cat-happy-cat-e1329931204797.jpg" alt="" />
                <div>
                    This is a comment...
                </div>
                   
            </div>
        );
    }
}

export { Comment };