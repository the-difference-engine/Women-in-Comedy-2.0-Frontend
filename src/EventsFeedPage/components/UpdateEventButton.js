import React, { Component } from 'react';


class UpdateEventButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const userInfo = sessionStorage.getItem("userId");
    const event = this.props.eventId;
    if (event.hostInfo.id === userInfo.id || userInfo.admin === true) {
      return (
        <div className="edit_btn"><a className="btn btn-default" href={`/updateevent/${this.props.eventId}`}>EDIT THIS EVENT</a>
        </div>
      ); 
    }
  }
}

export default UpdateEventButton;

