import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import '../css/profile.css';
import axios from 'axios';

export const { CREATE_POST } = 'create_post'; 



class Profile extends Component {
  componentWillMount() {
    const { userFeeds } = this.props;
    console.log('userFeeds Below');
    console.log({ userFeeds });
    const count = this.props.length;
    console.log('count below');
    console.log(count);
    const sender_id = sessionStorage.getItem('userId');
    const query = window.location.pathname;
    const new_query = query.slice(9);
    const placeHolder = "";

    if (sender_id !== new_query) {
      this.placeHolder = "Activity";
    } else if (sender_id === new_query) {
      this.placeHolder = "Your Activity";
    }

    if (userFeeds.length === 0) {
      return (
        <div id="personal-feed">
          <div className="no-feed">
              <p>No Feeds Avaliable</p>
          </div>
        </div>
      );
    };

  }


  
  renderField(field) {
    const { meta: { touched, error } } = field;
    const className = `personal-feed ${touched && error ? 'has-danger' : ''}`





        return (

          <div id={className}>
            <input
              className="feed-for-form"
              type="text"
              placeholder="Whats new?"
              {...field.input}
            />
            <div className="text-help">
              {touched ? error : ''}
            </div>
          </div>
        );
       

  }

  onSubmit(values) {
    console.log('values below');
    console.log(values);
    const sender_id = sessionStorage.getItem('userId');
    const query = window.location.pathname;
    const new_query = query.slice(9);


    const request = axios({
        method: "post",
        url: "http://localhost:9000/api/v1/users/create_post",
        headers: { "id": sender_id },
        body: { "post": values, "postable_id": new_query}
    });
    return (dispatch) => {
      request.then((data) => {
        dispatch({ type: CREATE_POST, payload: request })
      });
    }
  }

  render() {
    const { userFeeds } = this.props;
    console.log('userFeeds below !!! @_@');
    console.log(this.props);

    const { handleSubmit } = this.props;

      return (
        <div className="box_a">
          <div className="container">
            <h2 className="your-activity"> {this.placeHolder} </h2>
              <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <Field
                  name="body"
                  component={this.renderField}
                />
                  <div className="personal-feed-post-button">
                    <button className="btn btn-default" type="button">POST</button>
                  </div>
              </form>

            <div id="current-profile"> {renderFeeds(userFeeds)} </div>
          </div>
        </div>
      );
  };
};

  const renderFeeds = (feeds) => feeds.map((feed) =>

        <div key={feed.id}>
              <div id="personal-feed">
                <div className="box">
                    <div id="feed-photo-in-corner"><img src="https://u.o0bc.com/avatars/no-user-image.gif" height="50px" width="50px" alt=""/></div>
                  <div className="feed">
                    <div className="feeds-header">
                      <p className="feed-title"><span>{feed.authorFirstName}</span> commented on your <span>post</span></p>
                      <p className="feed-page-content">{feed.body}</p>
                      <p className="feed-page-content">{feed.postComments.body}</p>

                      <div id="feed-icons">
                        <a href="#">
                          <span class="glyphicon glyphicon-comment"></span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
        </div>
  );

  function validate(values) {
    const errors = {};
    if (!values.body) {
      errors.body = 'Enter Some Text';
    }
  }

export default reduxForm({
  validate,
  form: 'newPostForm'
})(
  connect(null, { CREATE_POST })(Profile)
);