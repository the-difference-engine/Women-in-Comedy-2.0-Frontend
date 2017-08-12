import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';

import '../css/register.css'

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = { userMade: false }
  }
  renderTitleField(field) {
    const { meta: {touched, error} } = field
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

    return (
      <div className={className} id="field-form">
        <input
          className="form-control"
          type="text"
          {...field.input}
          placeholder={field.label}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderPasswordField(field) {
    const { meta: {touched, error} } = field
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

    return (
      <div className={className} id="field-form">
        <input
          className="form-control"
          type="password"
          {...field.input}
          placeholder={field.label}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values) {
    axios.post('http://localhost:9000/api/v1/users', values)
      .then(payload => {
        console.log(payload);
        this.setState({ userMade: true });
      })
      .catch(err => {alert(err)});
  }
  render() {
    const { handleSubmit } = this.props;
    if (this.state.userMade) {
      return (
        <div>
          Thank You For Signing Up for Women In Comedy! A confirmation email has been sent.
        </div>
      )
    } else {
      return (
        <div id="register">
          <h1>Create a New Account</h1>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="First name"
              name="firstName"
              component={this.renderTitleField}
            />
            <Field
              label="Last name"
              name="lastName"
              component={this.renderTitleField}
            />
            <Field
              label="Email"
              name="email"
              component={this.renderTitleField}
            />
            <Field
              label="Password"
              name="password"
              component={this.renderPasswordField}
            />
            <button className="btn btn-success" type="submit">Submit</button>
          </form>

        </div>
      );
    }
  }
}

function validate(values) {
  const errors = {};
  if (!values.firstName) {
    errors.firstName = 'Enter a first name';
  }
  if (!values.lastName) {
    errors.lastName = "Enter a last name";
  }
  if (!values.email) {
    errors.email = "Enter an email";
  }
  if (!values.password) {
    errors.password = "Enter an password";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'newAccountForm'
})(
  connect(null)(RegisterForm)
);
