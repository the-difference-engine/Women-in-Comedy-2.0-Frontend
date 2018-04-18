import React, { Component } from 'react';
import { connect } from 'react-redux';



class UserDetail extends Component {

  render() {

    if(!this.props.currentUser){
      return <strong>Select a User to get Started</strong>
    }

    return (
      <div>
        <h3>User Details:</h3>
        <div>Display selected User Information Here</div>
      </div>

    );
  }

};

function mapStateToProps(state) {
  return {
    currentUser: state.usersInfo

  }
}

export default connect(mapStateToProps)(UserDetail)