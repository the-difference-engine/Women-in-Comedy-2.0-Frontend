import React, { Component } from 'react';
import { connect } from 'react-redux';

class Feed extends Component {
  render() {
    return (
      <div>
        thank you!
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    user: state.user
  };
}
export default connect(mapStateToProps)(Feed);
