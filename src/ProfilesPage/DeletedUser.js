import React, {Component} from 'react';

class DeletedUser extends Component {
  render() {
    return (
      <div id="message">
        You have deleted this user.
        <br />
        <a href = {process.env.REACT_APP_API_URL_QA + 'feed'}> back </a> 
      </div>
    );
  }
}


export default DeletedUser;
