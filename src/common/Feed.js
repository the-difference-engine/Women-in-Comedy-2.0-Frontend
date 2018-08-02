import React, { Component } from 'react';
import './css/feed.css';
import {connect} from 'react-redux';
import {commentInputChange} from '../actions';
import { Comment } from "../common/Comment";

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false}
  }
  // showMore() {
  //   const detail = document.getElementById('feed-detail');
  //   detail.style.maxHeight = 'none';
  // }

  onPost() {
    alert(this.props.commentBody);
  }

  render() {
    const { authorFirstName, authorId, body, postId } = this.props.feed;
    return (
      <div id='feed'>
        <img id="post-pro-img" src="http://cms.hostelbookers.com/hbblog/wp-content/uploads/sites/3/2012/02/cat-happy-cat-e1329931204797.jpg" alt="" />
        <div id='feed-content' className="event-comment">
           <p id="feed-news"><span>{authorFirstName}</span> created a <span>post</span></p> 
          <div id="wrap">
            <p id="feed-detail">{body}</p>
            {/* <a href="#" onClick={this.showMore}>...read more</a> */}
          </div>
          <div id="feed-icons">
            <a href="#"><span className="glyphicon glyphicon-comment"></span> <span className="icon-stats">1</span></a>
            <a href="#"><i className="glyphicon glyphicon-thumbs-up" aria-hidden="true"></i> <span className="icon-stats">2</span></a>
          </div>
          <div id="feed-input">
            <img src="http://cms.hostelbookers.com/hbblog/wp-content/uploads/sites/3/2012/02/cat-happy-cat-e1329931204797.jpg" alt="" />
            <input id="commentInput" placeholder="Write a Comment..." 
            onChange={(event) => this.props.commentInputChange(event.target.value)}
            value={this.props.commentBody}/>
            <button id="post-button" className="btn btn-default post-button" type="submit" 
            onClick={this.onPost.bind(this)}>POST</button>
           
          </div>
          <div id="commentContainer">
            <Comment />
            <Comment />
            <Comment />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {commentBody} = state;
  return {commentBody};
}

//export { Feed };

export default connect(mapStateToProps,
  {
    commentInputChange
  }
)(Feed);
