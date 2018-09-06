import React, { Component } from 'react';

import LoginNavbar from './components/LoginNavbar';
import RegisterForm from './components/RegisterForm';
import RegisterModal from './components/RegisterModal'

class Form extends Component {

  render() {
    return (
      <div>
        <div id="form">
          <LoginNavbar history={this.props.history} />
        </div>
        <div>
          <h4>Test users</h4>
          <p>email: lmcguire@gmail.com, password: password</p>
          <p>email: kmck@gmail.com, password: password</p>
          <br/>
          <h6><strong>*Admin*</strong></h6>
          <p>email: lknope@gmail.com, password: password</p>
          <br/>
          <h6><strong>*Superadmin*</strong></h6>
          <p>email: info@womenincomedy.org, password: password</p>
        </div>
      </div>
    );
  }
}

export default Form;
