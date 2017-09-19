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
    this.state = {
      selectedDay: null,

      time: moment().format(str),
      file: '',
      imagePreviewUrl: '',

      time: moment().format(str)
    };
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
    reader.readAsDataURL(file)

    // event.preventDefault();
    const eventName = document.getElementById('eventName').value;
    const eventLocation = document.getElementById('eventLocation').value;
    const eventDescription = document.getElementById('eventDescription').value;
    const data = { eventName, eventLocation, eventDescription, eventDate: this.state.selectedDay, eventTime: this.state.time };
    this.props.createEvent(data);
  }
  onCreateEvent() {
    const { address, date, description, img, location, ticketLink, time, title } = this.props.createEventForm;

    this.props.createEvent(
      { address, date, description, img, location, ticketLink, time, title },
      userId,
      () => this.props.history.push('/feed')
    );
  }
  render() {
    const { loading } = this.props.createEventForm;

    return (
      <div>
        <Navbar />
        <div id="create-event-wrapper">
<<<<<<< HEAD
          <div className="container">
            <div className="text-center">
              <form className="form-horizontal">
               <div className="form-group">
                 <label className="control-label col-sm-3">Event Title</label>
                  <div className="col-sm-6">
                     <input type="text" id="title" className="form-control" placeholder="Enter name of event" name="title" />
                  </div>
               </div>


                <div className="previewComponent" name="photo" id="photo">
                  <form onSubmit={(e)=>this._handleSubmit(e)}>
                    <input className="fileInput" 
                      type="file" 
                      onChange={(e)=>this._handleImageChange(e)} />
                    <button className="submitButton" 
                      type="submit" 
                      onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
                  </form>
                  <div className="imgPreview">
                    {$imagePreview}
                  </div>
                </div>

                <div className="form-group">
                   <label className="control-label col-sm-3">Location</label>
                  <div className="col-sm-6">
                     <input type="text" id="location" className="form-control" placeholder="Enter location for event" name="location" />

                    <label className="control-label col-sm-3">Location </label>
                    <div className="col-sm-6">
                      <input type="text" id="eventLocation"className="form-control" placeholder="Enter location for event" name="location" />
                    </div>
                  </div>
                </div>

               <div className="form-group">
                 <label className="control-label col-sm-3">Date & Time</label>
                 <div className="col-sm-3">
                   <DayPicker
                     selectedDays={selectedDay}
                     onDayClick={this.handleDayClick.bind(this)}
                   />
                   <p>
                     {selectedDay
                       ? selectedDay.toLocaleDateString()
                       : 'Please select a day 👻'}
                   </p>
                 </div>
                 <div className="col-md-3 col-sm-6" >
                   <TimePicker defaultValue={moment()} onChange={this.onChange.bind(this)} />
                 </div>
               </div>



               <div className="form-group">
                 <label className="control-label col-sm-3">Description </label>
                 <div className="col-sm-6">
                   <textarea className="form-control" rows="5" id="comment" id="about"></textarea>
                 </div>
               </div>

               <div className="form-group">
                 <label className="control-label col-sm-3">Ticket Link </label>
                 <div className="col-sm-6">
                   <textarea className="form-control" rows="1" id="comment" id="ticketLink"></textarea>
                   <textarea className="form-control" rows="5" id="comment" id="eventDescription"></textarea>
                 </div>
               </div>

               <div className="form-group">
                 <div className="col-sm-offset-1 col-sm-10">
                   <button type="submit" className="btn btn-primary" onClick={this.onClick.bind(this)}>Create</button>
                 </div>
               </div>
             </form>
            </div>
          </div>
=======
          <TextField
            hintText="Event Title"
            floatingLabelText="Enter Name Of The Event"
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            disabled={loading}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'title', value })}
          />
          <TextField
            hintText="Location"
            floatingLabelText="Enter Location"
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'location', value })}
            disabled={loading}
          />
          <TextField
            hintText="Address"
            floatingLabelText="Enter Address"
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'address', value })}
            disabled={loading}
          />
          <TextField
            hintText="Ticket Link"
            floatingLabelText="Enter Ticket Link"
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'ticketLink', value })}
            disabled={loading}
          />
          <TextField
            hintText="Description"
            floatingLabelText="Enter Description"
            multiLine={true}
            rows={2}
            floatingLabelFocusStyle={{ color: 'red' }}
            underlineFocusStyle={{ display: 'none' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'description', value })}
            disabled={loading}
          />
          <RaisedButton
            secondary
            label="upload image"
            onClick={this.onClick.bind(this)}
            disabled={loading}
          />
          <input type="file" id="input" style={{ display: 'none' }} onChange={this.onUpload.bind(this)}/><br />
          {this.renderImg()}
          <DatePicker
            hintText="Date"
            onChange={(event, value) => this.props.eventInputChange({ prop: 'date', value })}
            disabled={loading}
          />
          <TimePicker
            hintText="Time"
            autoOk={true}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'time', value })}
            disabled={loading}
          />
           <span style={{ marginTop: '15px', color: 'red' }}>{this.props.createEventForm.error}</span>
           {this.renderSpinner()}
          <RaisedButton
            secondary
            label="create event"
            onClick={this.onCreateEvent.bind(this)}
            style={{ marginTop: '15px' }}
            disabled={loading}
          />
>>>>>>> fdc2576c5d6c93af6751f28fe873a2b38f9b0803
        </div>
      </div>
    )
  }
}

function mapStateToProps({ createEventForm }) {
  console.log(createEventForm.loading);
  return { createEventForm };
}
export default connect(mapStateToProps, { createEvent, fetchUserInfo, eventInputChange })(CreateEvents);
