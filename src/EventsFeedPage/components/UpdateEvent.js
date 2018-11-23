import React, { Component } from 'react';

class UpdateEvent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
        // TODO: if current user = event user id
        // if current user = admin, then render edit event button on all events
        // if current user /= admin, then render edit event button only on that user's event
          
          <div className="edit_btn"><a className="btn btn-default" href={`/updateevent/${this.props.eventId}`}>EDIT THIS EVENT</a>
          </div>
    ); 
  }
}

export default UpdateEvent;