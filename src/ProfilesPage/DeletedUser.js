import React, {Component} from 'react';

class DeletedUser extends Component {
  render() {
    return (
      <div id="message">
        You have deleted this user.
        <br />
        <a href = '/feed'> back </a> 
      </div>
    );
  }
}


export default DeletedUser;
