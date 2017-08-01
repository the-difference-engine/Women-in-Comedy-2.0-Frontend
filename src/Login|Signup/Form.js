import React, { Component } from 'react';
import { connect } from 'react-redux';

class Form extends Component {

  render() {
    console.log(this.props.test);
    return (
      <div>
        {this.props.test.first}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    test: state.test
  };
}
export default connect(mapStateToProps)(Form);
