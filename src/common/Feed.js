import React, { Component } from 'react';
import './css/feed.css';
import {connect} from 'react-redux';
import {commentInputChange, fetchPostComments, createCommentOnPost} from '../actions';
import { Comment } from "../common/Comment";
import NewComments from './NewComments';

class Feed extends Component {
  constructor(props) {
    super(props);
    this.state = {clicked: false}
  }
  // showMore() {
  //   const detail = document.getElementById('feed-detail');
  //   detail.style.maxHeight = 'none';
  // }

  componentDidMount() {
    this.props.fetchPostComments(this.props.feed.postId);
  }

  onPost() {
    //alert(this.props.commentBody);
    const body = this.props.commentBody;
    const postId = this.props.feed.postId;
    const authorId = sessionStorage.getItem('userId');
    this.props.createCommentOnPost({body, postId, authorId}, this.props.fetchPostComments);
  }

  render() {
    const { authorFirstName, authorId, body, postId } = this.props.feed;
    return (
      <div className='feed'>
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
          <div className="feed-input">
            <img className="postImg" src="http://cms.hostelbookers.com/hbblog/wp-content/uploads/sites/3/2012/02/cat-happy-cat-e1329931204797.jpg" alt="" />
            <input id={`commentInput ${postId}`} placeholder="Write a Comment..." 
            onChange={(event) => this.props.commentInputChange(event.target.value)}
            value={this.props.commentBody}/>
            <button id="post-button" className="btn btn-default post-button" type="submit" 
            onClick={this.onPost.bind(this)}>POST</button>
           
          </div>
          <div id="commentContainer">
            <NewComments comments={this.props.comments} />
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {commentBody, comments} = state;
  return {commentBody, comments};
}

export default connect(mapStateToProps,
  {
    commentInputChange,
    fetchPostComments,
    createCommentOnPost
  }
)(Feed);
