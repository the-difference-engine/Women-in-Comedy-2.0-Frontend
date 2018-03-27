import React, { Component } from 'react';

import '../css/add-events.css';

class UpdateEventButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
          <div className="edit_btn"><a className="btn btn-default" href={`/updateevent/${this.props.eventId}`}>EDIT THIS EVENT</a>
          </div>
    ); 
  }
}

export default UpdateEventButton;