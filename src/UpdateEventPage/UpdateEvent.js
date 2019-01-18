import React, { Component } from "react";
import Navbar from "../common/Navbar";
import firebase from "firebase";
import axios from "axios";
import { LeftGraySideBar, RightGraySideBar } from "../common";
import {
  createEvent,
  fetchUserInfo,
  eventInputChange,
  updateEvent,
  fetchEventInfo,
  fetchNotifications
} from "../actions";
import { connect } from "react-redux";
import {
  TextField,
  RaisedButton,
  DatePicker,
  TimePicker,
  CircularProgress
} from "material-ui";

import "../CreateEventsPage/css/create-event.css";
import { userInfo } from "os";

const userId = sessionStorage.getItem("userId");

class UpdateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { imgURL: null };
  }

  componentDidMount() {
    const valid = sessionStorage.getItem('confirmed');
    if(valid === 'null' || !valid) {
      this.props.history.push('/');
    }
    const eventId = this.props.match.params.id;
    this.props.fetchEventInfo(eventId);
    this.props.fetchUserInfo(sessionStorage.getItem('userId'));
    this.props.fetchNotifications(userId);
  }

  componentWillReceiveProps(newProps) {
    const event = newProps.updateEventForm;
    if (event.user_id && event.user_id.toString() !== userId && sessionStorage.adminUser === "false") {
      this.props.history.push(`/eventsfeed/${event.id}`);
    }
    if (this.state.imgURL == null) {
      this.setState({ imgURL: event.photo });
    }
  }

  onClick() {
    const input = document.getElementById("input");
    input.click();
  }

  onUpload(event) {
    const file = event.target.files;
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file[0]);
    fileReader.onload = () => {
      this.props.eventInputChange({ prop: "photo", value: file[0] });
      this.setState({ imgURL: fileReader.result });
    };
  }

  renderImg() {
    if (this.state.imgURL) {
      return (
        <img id="img" src={this.state.imgURL} alt="" width="250" height="250" />
      );
    }
  }

  renderSpinner() {
    const { loading } = this.props.updateEventForm;
    if (loading) {
      return <CircularProgress />;
    }
  }

  storeEventPicture(photo) {
    const photoName = photo.name.slice(0, photo.name.lastIndexOf("."));
    const ext = photo.name.slice(photo.name.lastIndexOf("."));
    const ref = `/events/${photoName}${ext}`
    return firebase.storage()
      .ref(ref)
      .put(photo);
  };

  putEvent() {
    const {
      address,
      date,
      about,
      photo,
      location,
      ticket_link,
      time,
      title,
      is_private,
      id
    } = this.props.updateEventForm;

    axios({
      method: "put",
      url: `${process.env.REACT_APP_API_ENDPOINT}events/${id}`,
      data: {
        userId,
        address,
        date,
        about,
        photo,
        location,
        ticket_link,
        time,
        title,
        is_private
      }
    }).then((response) => {
      this.props.history.push(`/eventsfeed/${response.data}`);
    });
  }

  onUpdateEvent() {
    const { photo } = this.props.updateEventForm;
    if (photo && photo.constructor === File) {
      this.storeEventPicture(photo).then((snapshot) => {
        snapshot.ref.getDownloadURL().then((photo) => {
          this.props.updateEventForm.photo = photo
          this.putEvent();
        });
      });
    } else {
      this.putEvent()
    }
  }

  render() {
    const { loading } = this.props.updateEventForm;
    const event = this.props.updateEventForm;
    const {notifications} = this.props
    var time = null;
    if (event.time && event.time != "Invalid Date") {
      time = new Date("1 Jan 2018 " + event.time);
    }

    return (
      <div>
        <Navbar history={this.props.history} />
        {event.user_id && (
            <div id="create-event-wrapper">
              <TextField
                id="Title"
                floatingLabelText="Event Name"
                defaultValue={`${event.title || ""}`}
                underlineFocusStyle={{ display: "none" }}
                floatingLabelFocusStyle={{ color: "red" }}
                disabled={loading}
                onChange={(event, value) =>
                  this.props.eventInputChange({ prop: "title", value })
                }
              />
              <TextField
                id="Location"
                floatingLabelText="Location"
                defaultValue={`${event.location || ""}`}
                underlineFocusStyle={{ display: "none" }}
                floatingLabelFocusStyle={{ color: "red" }}
                onChange={(event, value) =>
                  this.props.eventInputChange({ prop: "location", value })
                }
                disabled={loading}
              />
              <TextField
                id="Address"
                floatingLabelText="Address"
                defaultValue={`${event.address || ""}`}
                underlineFocusStyle={{ display: "none" }}
                floatingLabelFocusStyle={{ color: "red" }}
                onChange={(event, value) =>
                  this.props.eventInputChange({ prop: "address", value })
                }
                disabled={loading}
              />
              <TextField
                id="Ticket Link"
                floatingLabelText="Ticket Link"
                defaultValue={`${event.ticket_link || ""}`}
                underlineFocusStyle={{ display: "none" }}
                floatingLabelFocusStyle={{ color: "red" }}
                onChange={(event, value) =>
                  this.props.eventInputChange({ prop: "ticket_link", value })
                }
                disabled={loading}
              />
              <TextField
                id="Description"
                floatingLabelText="Description"
                defaultValue={`${event.about || ""}`}
                //multiLine={true}
                rows={2}
                floatingLabelFocusStyle={{ color: "red" }}
                underlineFocusStyle={{ display: "none" }}
                onChange={(event, value) =>
                  this.props.eventInputChange({ prop: "about", value })
                }
                disabled={loading}
              />
              <RaisedButton
                secondary
                label="upload new image"
                onClick={this.onClick.bind(this)}
                disabled={loading}
              />
              <input
                type="file"
                id="input"
                style={{ display: "none" }}
                onChange={this.onUpload.bind(this)}
              />
              <br />
              {this.renderImg()}
              <DatePicker
                floatingLabelText="Event Date"
                minDate={new Date()}
                onChange={(event, value) =>
                  this.props.eventInputChange({ prop: "date", value })
                }
                disabled={loading}
                value={new Date(Date.parse(event.date))}
              />
              <TimePicker
                floatingLabelText="Event Time"
                onChange={(event, value) =>
                  this.props.eventInputChange({ prop: "time", value })
                }
                disabled={loading}
                value={time}
                minutesStep={5}
              />
              <span style={{ marginTop: "15px", color: "red" }}>
                {this.props.updateEventForm.error}
              </span>
              {this.renderSpinner()}
              <RaisedButton
                secondary
                label="update event"
                onClick={this.onUpdateEvent.bind(this)}
                style={{ marginTop: "15px" }}
                disabled={loading}
              />
            </div>
          )}
      </div>
    );
  }
}

function mapStateToProps({ updateEventForm, notifications }) {
  return { updateEventForm, notifications };
}
export default connect(mapStateToProps, { updateEvent, fetchUserInfo, eventInputChange, fetchEventInfo, fetchNotifications })(UpdateEvent);
