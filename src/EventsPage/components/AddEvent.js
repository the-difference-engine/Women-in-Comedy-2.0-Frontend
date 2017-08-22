import React, { Component } from 'react';

import '../css/add-events.css';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }


  render() {
    return(
      <div className="add-event">
        <div className="add-event-content">
          <div className="upcoming-events"><p>Upcoming Events</p></div>
          <div className="past-events"><p>Past Events</p></div>
          <div className="new-event"><button className="btn btn-default" onClick={() => this.props.history.push('/newevent')}>+ NEW EVENT</button></div>
        </div>
      </div>
    );
  }
}

export default AddEvent;
