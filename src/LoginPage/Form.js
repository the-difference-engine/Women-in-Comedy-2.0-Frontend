import React, { Component } from 'react';

import LoginNavbar from './components/LoginNavbar';
import RegisterForm from './components/RegisterForm';
import {Modal} from '../common';
class Form extends Component {
  render() {
    return (
      <div id="form">
        <LoginNavbar history={this.props.history} />
        <RegisterForm />
        
      </div>
    );
  }
}


export default Form;
