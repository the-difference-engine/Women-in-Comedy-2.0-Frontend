import React, { Component } from 'react';

import '../css/add-events.css';

class UpdateEvent extends Component {
  constructor(props) {
    super(props);
  }


  render() {
    return(
      <div className="add-event">
        <div className="add-event-content">
        // if current user = event user id?
          <div className="new-event"><a className="btn btn-default" href={`/updateevent/${this.props.eventId}`}>EDIT THIS EVENT</a></div>
        </div>
      </div>
    );
  }
}

export default UpdateEvent;