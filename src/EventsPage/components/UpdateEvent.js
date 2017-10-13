import React, { Component } from 'react';

import '../css/add-events.css';

class UpdateEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }


  render() {
    return(
      <div className="add-event">
        <div className="add-event-content">
        // if current user = event user id?
          <div className="new-event"><button className="btn btn-default" onClick={() => this.props.history.push('/newevent')}>EDIT THIS EVENT</button></div>
        </div>
      </div>
    );
  }
}

export default UpdateEvent;