import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let EditForm = (props) => {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit}>

    <div class="form-group">
      <label htmlFor="firstName">First Name</label>
      <Field class="col-2 col-form-label" name="firstName" component="input" type="text" />
    </div>
    <div class="form-group">
      <label htmlFor="lastName">Last Name</label>
      <Field class="form-control" name="lastName" component="input" type="text" />
    </div>
    <div class="form-group">
      <label htmlFor="email">Email</label>
      <Field class="form-control" name="email" component="input" type="email" />
    </div>
    <button class="btn btn-primary" type="submit">Submit</button>

  </form>
}

EditForm = reduxForm({
  form: 'userEdit'
})(EditForm)

export default EditForm
