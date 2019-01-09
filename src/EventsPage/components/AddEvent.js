import React, { Component } from 'react';
import { connect } from 'react-redux';
import { acceptInvite, fetchPendingUserInvites, declineInvite } from '../../actions';
import '../css/add-events.css';

class AddEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { show: false };
  }

  renderPendingInvites() {
    const userId = sessionStorage.getItem('userId');
    const callback = this.props.fetchPendingUserInvites;

    return this.props.invites.map(invite => {
      return (
        <div key={invite.requestId}>
          <p id="connection-name">{invite.event} from {invite.firstName} {invite.lastName}</p>
          <br/>
          <button type="button" onClick={() => this.props.acceptInvite(userId, invite.senderId, callback)}>accept</button>
          <button type="button" onClick={() => this.props.declineInvite(userId, invite.requestId, callback)}>decline</button>
        </div>
      );
    });
  }
  
  render() {
    return(
      <div className="add-event">
        <div className="add-event-content">
          <div className="new-event"><button className="btn btn-default" onClick={() => this.props.history.push('/newevent')}>+ NEW EVENT</button></div>
          <div className="upcoming-events"><p>Pending Event Invites ({this.props.invites.length})</p></div>
          {this.renderPendingInvites()}
        </div>
      </div>
    );
  }
}

export default connect(null, { acceptInvite, fetchPendingUserInvites, declineInvite })(AddEvent);