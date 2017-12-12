import React, { Component } from 'react';

import './css/modal.css'
class LoginModal extends Component {

  loginModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  render () {
    return (
      <div id="modal" onClick={this.loginModal}>
        <div id='modal-content'>
          <div id="modal-header">
            <span id="close" onClick={this.loginModal}>&times;</span>
          </div>
          <div id="modal-body">
            <h4>Please log in first.</h4>
          </div>
          <div id="modal-footer"></div>
        </div>
      </div>
    );
  }
}

export default LoginModal ;
