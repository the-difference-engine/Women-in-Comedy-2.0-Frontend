import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import '../css/messages.css';
// import {acceptConnection, declineConnection, fetchPendingUserConnections, fetchUserConnections} from '../../actions';

class Messages extends Component {

  render() {
    return (
      <div>
        <div>
          <p id="next-event">Next Event</p>
          <Link to="/events" className="events-link">View Upcoming Events</Link>
        </div>
        <br/>
      </div>
    )
  }
}



export default connect(null)(Messages);
