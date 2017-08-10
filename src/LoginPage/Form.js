import React, { Component } from 'react';

import LoginNavbar from './components/LoginNavbar';
import RegisterForm from './components/RegisterForm';
import './css/form.css';
class Form extends Component {

  render() {
    console.log('from form component', this.props.renderOn);
    return (
      <div id="form">
        <LoginNavbar history={this.props.history} renderOn={this.props.renderOn} />
        <RegisterForm history={this.props.history}/>
      </div>
    );
  }
}


export default Form;
