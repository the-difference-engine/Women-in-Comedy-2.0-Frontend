import React, { Component } from 'react';


class UpdateEventButton extends Component {
  constructor(props) {
    super(props);
  }

  
  render() {
    const userInfo = sessionStorage.getItem("userId");
    const event = this.props.event;
    console.log(this.props.event)
    if (event.info.user_id.toString() === userInfo.id || sessionStorage.adminUser === "true") {
      return (
        <div className="edit_btn"><a className="btn btn-default" href={`/updateevent/${event.info.id}`}>EDIT THIS EVENT</a>
        </div>
      ); 
    }
  }
}

export default UpdateEventButton;

