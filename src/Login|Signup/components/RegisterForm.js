import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
class RegisterForm extends Component {
  renderTitleField(field) {
    const { meta: {touched, error} } = field
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

    return (
      <div className={className}>
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
      <div className={className}>
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
    console.log(values);
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <div>
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
})(RegisterForm);
