import React, { Component } from 'react';
import {Comment} from '../common/Comment';

class NewComments extends Component {
    renderComments () {
        return this.props.comments.map(comment => <Comment key={comment.id} comment={comment}/>);
    }
    
    render() {
        return (
            <div>
                {this.renderComments()}
            </div>
        );
    }
}
export default NewComments