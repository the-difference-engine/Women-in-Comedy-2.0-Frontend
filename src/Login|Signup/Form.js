import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

import RegisterForm from './components/RegisterForm';

class Form extends Component {

  render() {
    console.log(this.props.test);
    return (
      <div className="container">
        <RegisterForm />
      </div>
    );
  }
}


export default Form;
