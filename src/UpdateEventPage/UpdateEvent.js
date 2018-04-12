import React, { Component } from 'react';
import Navbar from '../common/Navbar';
import { LeftGraySideBar, RightGraySideBar } from '../common';
import { createEvent, fetchUserInfo, eventInputChange, updateEvent, fetchEventInfo } from '../actions';
import { connect } from 'react-redux';
import { TextField, RaisedButton, DatePicker, TimePicker, CircularProgress } from 'material-ui';

import '../CreateEventsPage/css/create-event.css';
const userId = sessionStorage.getItem('userId');

class UpdateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: null
    };
  }

  componentDidMount() {
    const eventId = this.props.match.params.id;
    this.props.fetchEventInfo(eventId);
    this.props.fetchUserInfo(sessionStorage.getItem('userId'));
  }

  componentWillReceiveProps(newProps) {
    const event = newProps.updateEventForm;
    if (event.user_id && event.user_id.toString() !== userId) {
      this.props.history.push(`/eventsfeed/${event.id}`);
    }
    this.setState({ imgURL: event.photo });
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
    return <img id="img" src={this.state.imgURL} alt="" width="250" height="250" />
  }
}
renderSpinner() {
  const { loading } = this.props.updateEventForm;
  if (loading) {
    return (
      <CircularProgress />
    );
  }
}
async onUpdateEvent() {
  const { address, date, description, img, location, ticketLink, time, title, id } = this.props.updateEventForm;

  await this.props.updateEvent(
    { address, date, description, img, location, ticketLink, time, title, id },
    userId
  );

  this.props.history.push(`/eventsfeed/${id}`)
}
render() {
  const { loading } = this.props.updateEventForm;
  const event = this.props.updateEventForm;
  console.log(event);

  return (
    <div>
      <Navbar history={this.props.history} />
      {event.user_id && (event.user_id.toString() === userId) &&
        <div id="create-event-wrapper">
          <TextField
            id="Title"
            floatingLabelText="Event Name"
            defaultValue={`${event.title || ""}`}
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            disabled={loading}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'title', value })}
          />
          <TextField
            id="Location"
            floatingLabelText="Location"
            defaultValue={`${event.location || ""}`}
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'location', value })}
            disabled={loading}
          />
          <TextField
            id="Address"
            floatingLabelText="Address"
            defaultValue={`${event.address || ""}`}
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'address', value })}
            disabled={loading}
          />
          <TextField
            id="Ticket Link"
            floatingLabelText="Ticket Link"
            defaultValue={`${event.ticket_link || ""}`}
            underlineFocusStyle={{ display: 'none' }}
            floatingLabelFocusStyle={{ color: 'red' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'ticketLink', value })}
            disabled={loading}
          />
          <TextField
            id="Description"
            floatingLabelText="Description"
            defaultValue={`${event.about || ""}`}
            multiLine={true}
            rows={2}
            floatingLabelFocusStyle={{ color: 'red' }}
            underlineFocusStyle={{ display: 'none' }}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'description', value })}
            disabled={loading}
          />
          <RaisedButton
            secondary
            label="upload new image"
            onClick={this.onClick.bind(this)}
            disabled={loading}
          />
          <input type="file" id="input" style={{ display: 'none' }} onChange={this.onUpload.bind(this)} /><br />
          {this.renderImg()}
          <DatePicker
            floatingLabelText="Event Date"
            // defaultDate={event.date && new Date((event.date.split('-')[0], event.date.split('-')[1] - 1, event.date.split('-')[2]))}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'date', value })}
            disabled={loading}
          />
          <TimePicker
            floatingLabelText="Event Time"
            // defaultTime={event && event.date && event.time && new Date((event.date.split('-')[0], event.date.split('-')[1] - 1, event.date.split('-')[2]), event.time.toString())}
            autoOk={true}
            onChange={(event, value) => this.props.eventInputChange({ prop: 'time', value })}
            disabled={loading}
          />
          <span style={{ marginTop: '15px', color: 'red' }}>{this.props.updateEventForm.error}</span>
          {this.renderSpinner()}
          <RaisedButton
            secondary
            label="update event"
            onClick={this.onUpdateEvent.bind(this)}
            style={{ marginTop: '15px' }}
            disabled={loading}
          />
        </div>
      }
    </div>
  )
}
}

function mapStateToProps({ updateEventForm }) {
  return { updateEventForm };
}
export default connect(mapStateToProps, { updateEvent, fetchUserInfo, eventInputChange, fetchEventInfo })(UpdateEvent);