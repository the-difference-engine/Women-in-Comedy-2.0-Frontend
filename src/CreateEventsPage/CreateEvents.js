import React, { Component } from 'react';
import { LeftGraySideBar, RightGraySideBar, Navbar } from '../common';
import { createEvent, fetchUserInfo } from '../actions';
import { connect } from 'react-redux';


class CreateEvents extends Component {
  render() {
    return (
      <div>
        event
      </div>
    )
  }
}


export default connect(null, { createEvent, fetchUserInfo })(CreateEvents);
