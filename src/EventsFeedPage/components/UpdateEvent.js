import React, { Component } from 'react';
import { userInfo } from 'os';

class UpdateEvent extends Component {
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

export default UpdateEvent;