import React, { Component } from 'react';

class UpdateEvent extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (  
        // TODO: if current user = event user id
          <div className="edit_btn"><a className="btn btn-default" href={`/updateevent/${this.props.eventId}`}>EDIT THIS EVENT</a>
          </div>
    ); 
  }
}

export default UpdateEvent;