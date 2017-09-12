import React, { Component } from 'react';
import { LeftGraySideBar, RightGraySideBar, Navbar } from '../common';
import { createEvent, fetchUserInfo } from '../actions';
import { connect } from 'react-redux';
import DayPicker from 'react-day-picker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import axios from 'axios'
import 'react-day-picker/lib/style.css';
import 'rc-time-picker/assets/index.css';
import './css/create-event.css'
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';
const showSecond = false;

class CreateEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null,

      time: moment().format(str),
      file: '',
      imagePreviewUrl: ''

      time: moment().format(str)
    };
  }
  handleDayClick (day, { selected }) {
    this.setState({
      selectedDay: selected ? undefined : day,
    });
  };

  onChange(value) {
    console.log(value && value.format(str));
    this.setState({ time: value.format(str) });
  }

  onClick(event) {

    console.log("clicked")
    event.preventDefault();
    const userId = sessionStorage.getItem('userId');
    const title = document.getElementById('title').value;
    const photo = document.getElementById('photo').value;
    const about = document.getElementById('about').value;
    const ticketLink = document.getElementById('ticketLink').value;
    const location = document.getElementById('location').value;
    const data = { userId, title, location, photo, about, ticketLink, date: this.state.selectedDay.toLocaleDateString(), time: this.state.time };
    this.props.createEvent(data);
    this.props.history.push('/events'); // Forwards the page after user clicks create
  }

  onSubmit(data) {
    console.log("submittedd")
    // axios.post('https://localhost:9000/api/v1/events', {
       
    //   user_id: data.user_id,
    //   title: data.title,
    //   photo: data.photo,
    //   date: data.date,
    //   time: data.time,
    //   ticket_link: data.ticket_link,
    //   location: data.location,
    //   about: data.about
    // })
  }

  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    }
    reader.readAsDataURL(file)

    event.preventDefault();
    const eventName = document.getElementById('eventName').value;
    const eventLocation = document.getElementById('eventLocation').value;
    const eventDescription = document.getElementById('eventDescription').value;
    const data = { eventName, eventLocation, eventDescription, eventDate: this.state.selectedDay, eventTime: this.state.time };
    this.props.createEvent(data);
  }

  render() {
    const { selectedDay } = this.state;

    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) {
      $imagePreview = (<img src={imagePreviewUrl} />);
    } else {
      $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
    }

    return(
      <div>
        <Navbar />
        <div id="create-event-wrapper">
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
        </div>
      </div>
    );
  }
}


export default connect(null, { createEvent, fetchUserInfo })(CreateEvents);
