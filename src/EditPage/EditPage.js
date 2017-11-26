import React, { Component } from 'react';

import Navbar from '../common/Navbar';
import { RightGraySideBar, LeftGraySideBar, PageContent, Feed } from '../common';

class EditPage extends Component {

  render() {
    return (
      <div>
        <Navbar history={this.props.history} />
        <LeftGraySideBar />
        <RightGraySideBar />
        <PageContent>
          <p> This is the edit page. </p>
        </PageContent>
      </div>
    )
  }
}

export default EditPage;
