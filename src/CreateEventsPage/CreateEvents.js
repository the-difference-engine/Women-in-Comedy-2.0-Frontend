import React, { Component } from "react";
import Navbar from "../common/Navbar";
import {
  createEvent,
  eventInputChange,
  fetchNotifications,
  fetchUserInfo
} from "../actions";
import { connect } from "react-redux";
import {
  CircularProgress,
  DatePicker,
  RaisedButton,
  TextField,
  TimePicker,
  Checkbox
} from "material-ui";

import "./css/create-event.css";

const userId = sessionStorage.getItem("userId");

class CreateEvents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgURL: null
    };
  }
  componentDidMount() {
    const valid = sessionStorage.getItem('confirmed');
    if(valid === 'null' || !valid) {
      this.props.history.push('/');
    }
    this.props.fetchNotifications(sessionStorage.getItem('userId'));
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
    const { loading } = this.props.createEventForm;
    if (loading) {
      return <CircularProgress />;
    }
  }
  privateRender(props) {
    if (sessionStorage.adminUser === "true") {
      return (
        <Checkbox
          id="private-event-wrapper"
          label="Private Event"
          labelStyle={{ display: "contents" }}
          onCheck={(event, value) =>
            this.props.eventInputChange({ prop: "is_private", value })
          }
        />
      );
    }
  }

  async onCreateEvent() {
   
    let newUserId = sessionStorage.getItem("userId");
    const {
      address,
      date,
      about,
      photo,
      location,
      ticket_link,
      time,
      title,
      is_private
    } = this.props.createEventForm;

    await this.props.createEvent(
      {
        address,
        date,
        about,
        photo,
        location,
        ticket_link,
        time,
        title,
        is_private
      },
      newUserId
    );
  if (this.props.createEventForm.error) {
    console.log('error')
  }
  else {
    this.props.history.push(`/eventsfeed/${this.props.createEventForm.id}`)
  };
}

  render() {
    const { loading } = this.props.createEventForm;
    const { notifications } = this.props;

    return (
      <div>
        <Navbar history={this.props.history} notifications={notifications} />
        <div id="create-event-wrapper">
          <TextField
            hintText="Event Title"
            floatingLabelText="Enter Name Of The Event"
            underlineFocusStyle={{ display: "none" }}
            floatingLabelFocusStyle={{ color: "red" }}
            disabled={loading}
            onChange={(event, value) =>
              this.props.eventInputChange({ prop: "title", value })
            }
          />
          <TextField
            hintText="Location"
            floatingLabelText="Enter Location"
            underlineFocusStyle={{ display: "none" }}
            floatingLabelFocusStyle={{ color: "red" }}
            onChange={(event, value) =>
              this.props.eventInputChange({ prop: "location", value })
            }
            disabled={loading}
          />
          <TextField
            hintText="Address"
            floatingLabelText="Enter Address"
            underlineFocusStyle={{ display: "none" }}
            floatingLabelFocusStyle={{ color: "red" }}
            onChange={(event, value) =>
              this.props.eventInputChange({ prop: "address", value })
            }
            disabled={loading}
          />
          <TextField
            hintText="Ticket Link"
            floatingLabelText="Enter Ticket Link"
            underlineFocusStyle={{ display: "none" }}
            floatingLabelFocusStyle={{ color: "red" }}
            onChange={(event, value) =>
              this.props.eventInputChange({ prop: "ticket_link", value })
            }
            disabled={loading}
          />
          <TextField
            hintText="Description"
            floatingLabelText="Enter Description"
            multiLine={true}
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
            label="upload image"
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
            hintText="Date"
            onChange={(event, value) =>
              this.props.eventInputChange({ prop: "date", value })
            }
            disabled={loading}
            minDate={new Date()}
          />
          <TimePicker
            hintText="Time"
            onChange={(event, value) =>
              this.props.eventInputChange({ prop: "time", value })
            }
            disabled={loading}
            minutesStep={5}
          />
          <div>{this.privateRender()}</div>

          <span style={{ marginTop: "15px", color: "red" }}>
            {this.props.createEventForm.error}
          </span>
          {this.renderSpinner()}
          <RaisedButton
            secondary
            label="create event"
            onClick={this.onCreateEvent.bind(this)}
            style={{ marginTop: "15px" }}
            disabled={loading}
          />
        </div>
      </div>
    );
  }
}

function mapStateToProps({ createEventForm, notifications }) {
  return { createEventForm, notifications };
}
export default connect(
  mapStateToProps,
  { createEvent, fetchUserInfo, fetchNotifications, eventInputChange }
)(CreateEvents);
