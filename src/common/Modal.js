import React, { Component } from 'react';

import './css/modal.css'
class Modal extends Component {

  closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  render () {
    return (
      <div id="modal" onClick={this.closeModal}>
        <div id='modal-content'>
          <div id="modal-header">
            <span id="close" onClick={this.closeModal}>&times;</span>
          </div>
          <div id="modal-body">
            <h4>Please verify your account by clicking on the link in the confirmation email. </h4>
            <button className='btn btn-sm' id="resend">Resend Email</button>
          </div>
          <div id="modal-footer"></div>
        </div>
      </div>
    );
  }
}

export { Modal };
