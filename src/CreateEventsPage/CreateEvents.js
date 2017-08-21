import React, { Component } from 'react';
import { LeftGraySideBar, RightGraySideBar, Navbar } from '../common';
import DayPicker from 'react-day-picker';
import TimePicker from 'rc-time-picker';
import moment from 'moment';
import 'react-day-picker/lib/style.css';
import 'rc-time-picker/assets/index.css';
import './css/create-event.css'
class CreateEvents extends Component {
  render() {
    return(
      <div>
        <Navbar />
        <div id="create-event-wrapper">
          <div className="container">
            <div className="text-center">
              <form className="form-horizontal">
               <div className="form-group">
                 <label className="control-label col-sm-3">Event Name </label>
                 <div className="col-sm-6">
                   <input type="text" className="form-control" placeholder="Enter name of event" name="name" />
                 </div>
               </div>
               <div className="form-group">
                 <label className="control-label col-sm-3" >Location </label>
                 <div className="col-sm-6">
                   <input type="text" className="form-control" placeholder="Enter location for event" name="location" />
                 </div>
               </div>
               <div className="form-group">
                 <label className="control-label col-sm-3">Date/Time</label>
                 <div className="col-sm-1">
                   <DayPicker onDayClick={day => console.log(day)}/>
                 </div>
                 <div className="col-sm-6">
                   <TimePicker defaultValue={moment()} />
                 </div>
               </div>
               <div className="form-group">
                 <label className="control-label col-sm-3">Description </label>
                 <div className="col-sm-6">
                   <textarea className="form-control" rows="5" id="comment"></textarea>
                 </div>
               </div>
               <div className="form-group">
                 <div className="col-sm-offset-1 col-sm-10">
                   <button type="submit" className="btn btn-primary">Create</button>
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

export default CreateEvents;
