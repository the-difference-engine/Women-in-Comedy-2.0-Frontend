import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';

import '../css/register.css'

class RegisterForm extends Component {
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
      .then(response => {
        document.cookie = JSON.stringify(response.data);
        console.log(document.cookie);
        this.props.history.push('/feed');
      })
      .catch(err => {console.log(err)});
  }
  render() {

    
    const { handleSubmit } = this.props;
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
        {this.props.user.email}
      </div>
    );
  }
}

function mapStateToProps({ user }) {
  return {
    user
  };
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
  connect(mapStateToProps)(RegisterForm)
);
