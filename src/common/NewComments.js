import React, { Component } from 'react';
import Comment from '../../common';
import '../css/new-feeds.css';

class NewComments extends Component {
    renderComments () {
        return this.props.comments.map(comment => <Comment key={comment.id} comment={comment}/>);
    }
    
    render() {
        <div id="new-feed-container">
            {this.renderComments()}
        </div>
    }
}
export default NewComments