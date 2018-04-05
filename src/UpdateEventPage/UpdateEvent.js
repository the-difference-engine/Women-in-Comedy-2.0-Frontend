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
  }

  componentDidMount() {
    const eventId = this.props.match.params.id;
    this.props.fetchEventInfo(eventId);
    this.props.fetchUserInfo(sessionStorage.getItem('userId'));
  }

  componentWillReceiveProps(newProps) {
    console.log(newProps.updateEventForm.event.info.user_id);
    console.log(userId);
    console.log((newProps.updateEventForm.event.info.user_id.toString() === userId));
    if (newProps.updateEventForm.event) {
      let event = newProps.updateEventForm.event;
      if (event.info.user_id.toString() !== userId) {
        this.props.history.push(`/eventsfeed/${event.info.id}`);
      }
      this.setState({ imgURL: event.info.photo });
    }
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
    const { address, date, description, img, location, ticketLink, time, title } = this.props.createEventForm;

    await this.props.updateEvent(
      { address, date, description, img, location, ticketLink, time, title },
      userId,
    );

    this.props.history.push(`/eventsfeed/${this.props.updateEventForm.id}`)
  }
  render() {
    const { loading } = this.props.updateEventForm;
    const event = this.props.updateEventForm.event;

    return (
      <div>
        <Navbar history={this.props.history} />
        {event && (event.info.user_id.toString() === userId) &&
          <div id="create-event-wrapper">
            <TextField
              id="Title"
              value={`${event && event.info.title}`}
              underlineFocusStyle={{ display: 'none' }}
              floatingLabelFocusStyle={{ color: 'red' }}
              disabled={loading}
              onChange={(event, value) => this.props.eventInputChange({ prop: 'title', value })}
            />
            <TextField
              id="Location"
              value={`${event && event.info.location}`}
              underlineFocusStyle={{ display: 'none' }}
              floatingLabelFocusStyle={{ color: 'red' }}
              onChange={(event, value) => this.props.eventInputChange({ prop: 'location', value })}
              disabled={loading}
            />
            <TextField
              id="Address"
              value={`${event && event.info.address}`}
              underlineFocusStyle={{ display: 'none' }}
              floatingLabelFocusStyle={{ color: 'red' }}
              onChange={(event, value) => this.props.eventInputChange({ prop: 'address', value })}
              disabled={loading}
            />
            <TextField
              id="Ticket Link"
              value={`${event && event.info.ticket_link}`}
              underlineFocusStyle={{ display: 'none' }}
              floatingLabelFocusStyle={{ color: 'red' }}
              onChange={(event, value) => this.props.eventInputChange({ prop: 'ticketLink', value })}
              disabled={loading}
            />
            <TextField
              id="Description"
              value={`${event && event.info.about}`}
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
            <input type="file" id="input" style={{ display: 'none' }} onChange={this.onUpload.bind(this)} /><br />
            {this.renderImg()}
            <DatePicker
              hintText={`${event && event.info.date}`}
              onChange={(event, value) => this.props.eventInputChange({ prop: 'date', value })}
              disabled={loading}
            />
            <TimePicker
              hintText={`${event && event.info.time}`}
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
export default connect(mapStateToProps, { createEvent, fetchUserInfo, eventInputChange, fetchEventInfo })(UpdateEvent);
