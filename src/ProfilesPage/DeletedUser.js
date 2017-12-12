import React, {Component} from 'react';

class DeletedUser extends Component {
  render() {
    return (
      <div id="message">
        You have deleted this user.
        <br />
        <a href = "http://localhost:3000/feed"> back </a> 
      </div>
    );
  }
}


export default DeletedUser;