import React, { Component } from 'react';
import { connect } from 'react-redux';

import Navbar from '../common/Navbar';
import { RightGraySideBar, LeftGraySideBar, PageContent, Feed } from '../common';

class EditPage extends Component {

  render() {
    if(this.props.adminEdit) {
      console.log(this.props.adminEdit);
      return <div>You are in admin edit page. </div>
    }
    console.log(this.props.adminEdit);
    return (
      <div>
          <p> This is user edit page. </p>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    adminEdit: state.adminEdit
  }
}

export default connect (mapStateToProps)(EditPage);
