import React, { Component } from 'react';
import { LeftGraySideBar, RightGraySideBar, Navbar } from '../common';
import { createEvent, fetchUserInfo } from '../actions';
import { connect } from 'react-redux';
import DayPicker from 'react-day-picker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'react-day-picker/lib/style.css';
import 'rc-time-picker/assets/index.css';
import './css/create-event.css'
const str = showSecond ? 'HH:mm:ss' : 'HH:mm';
const showSecond = true;

class CreateEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedDay: null,
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
    event.preventDefault();
    const eventName = document.getElementById('eventName').value;
    const eventLocation = document.getElementById('eventLocation').value;
    const eventDescription = document.getElementById('eventDescription').value;
    const data = { eventName, eventLocation, eventDescription, eventDate: this.state.selectedDay, eventTime: this.state.time };
    this.props.createEvent(data);
  }

  render() {
    const { selectedDay } = this.state;
    return(
      <div>
        <Navbar />
        <div id="create-event-wrapper">
          <div className="container">
            <div className="text-center">
              <form className="form-horizontal" onSubmit={this.formPreventDefault}>
               <div className="form-group">
                 <label className="control-label col-sm-3">Event Name </label>
                 <div className="col-sm-6">
                   <input type="text" id="eventName" className="form-control" placeholder="Enter name of event" name="title" />
                 </div>
               </div>

               <div className="form-group">
                 <label className="control-label col-sm-3">Location </label>
                 <div className="col-sm-6">
                   <input type="text" id="eventLocation"className="form-control" placeholder="Enter location for event" name="location" />
                 </div>
               </div>

               <div className="form-group">
                 <label className="control-label col-sm-3" >Time </label>
                 <div className="col-sm-6">
                   <input type="text" className="form-control" placeholder="Enter time for event" name="Time" />
                 </div>
               </div>


               <div className="form-group">
                 <label className="control-label col-sm-3">Date/Time</label>
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
