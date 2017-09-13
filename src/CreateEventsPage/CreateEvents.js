import React, { Component } from 'react';
import { LeftGraySideBar, RightGraySideBar, Navbar } from '../common';
import {  createEvent, fetchUserInfo, eventInputChange } from '../actions';
import { connect } from 'react-redux';
import { TextField, RaisedButton, DatePicker, TimePicker, CircularProgress } from 'material-ui';

import './css/create-event.css'
const userId = sessionStorage.getItem('userId')

class CreateEvents extends Component {
  constructor(props) {
    super(props);
    this.state = { imgURL: null };
  }

  onClick() {
    const input = document.getElementById('input');
    input.click();
  }
  onUpload(event) {
    const file = event.target.files;
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file[0]);
    fileReader.onload = () => {
      this.props.eventInputChange({ prop: 'img', value: file[0] })
      this.setState({ imgURL: fileReader.result });
    };
  }

  renderImg() {
    if (this.state.imgURL) {
      return <img id="img" src={this.state.imgURL} alt="" width="250" height="250"/>
    }
  }
  renderSpinner() {
    const { loading } = this.props.createEventForm;
    if (loading) {
      return(
        <CircularProgress />
      );
    }
  }
  onCreateEvent() {
    const { address, date, description, img, location, ticketLink, time, title } = this.props.createEventForm;
    console.log('oncreateevnet');
    this.props.createEvent(
      { address, date, description, img, location, ticketLink, time, title },
      userId
    );
  }
  render() {
    return (
      <div>
        <Navbar />
        <div id="create-event-wrapper">
          <TextField
            hintText="Event Title"
            floatingLabelText="Enter Name Of The Event"
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'title', value })}
          />
          <TextField
            hintText="Location"
            floatingLabelText="Enter Location"
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'location', value })}
          />
          <TextField
            hintText="Address"
            floatingLabelText="Enter Address"
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'address', value })}
          />
          <TextField
            hintText="TicketLink"
            floatingLabelText="Enter TicketLink"
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'ticketLink', value })}
          />
          <TextField
            hintText="Description"
            floatingLabelText="Enter Description"
            multiLine={true}
            rows={2}
            floatingLabelFocusStyle={{ color: 'red' }}
            underlineFocusStyle={{ display: 'none' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'description', value })}
          />
          <RaisedButton
            secondary
            label="upload image"
            onClick={this.onClick.bind(this)}
          />
          <input type="file" id="input" style={{ display: 'none' }} onChange={this.onUpload.bind(this)}/><br />
          {this.renderImg()}
          <DatePicker
            hintText="Date"
            onChange={(event, value) => this.props.eventInputChange({ prop: 'date', value })}
          />
          <TimePicker
            hintText="Time"
            autoOk={true}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'time', value })}
          />
           <span style={{ marginTop: '15px', color: 'red' }}>{this.props.createEventForm.error}</span>
           {this.renderSpinner()}
          <RaisedButton
            secondary
            label="create event"
            onClick={this.onCreateEvent.bind(this)}
            style={{ marginTop: '15px' }}
          />
        </div>
      </div>
    )
  }
}

function mapStateToProps({ createEventForm }) {
  console.log(createEventForm);
  return { createEventForm };
}
export default connect(mapStateToProps, { createEvent, fetchUserInfo, eventInputChange })(CreateEvents);
