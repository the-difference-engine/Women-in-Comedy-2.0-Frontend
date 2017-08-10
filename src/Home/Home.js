import React, { Component } from 'react';
import Form from '../LoginPage/Form';
import Feed from '../FeedPage/FeedPage';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = { loggedIn: false };
  }
  renderForm(props) {

    console.log(props);
    return (
      <div>
        <Form renderOn={props} />
      </div>
    );
  }

  renderFeeds() {
    return (
      <div>
        <Feed />
      </div>
    );
  }
  renderOn() {
    this.setState({loggedIn: true })
  }
  render () {
    const valid = sessionStorage.getItem('confirmed');
    // valid ? this.renderFeeds() : this.renderForm();
    if (valid) {
      return this.renderFeeds();
    } else {
      return this.renderForm(this.renderOn.bind(this));
    }
  }
}

export default Home;
