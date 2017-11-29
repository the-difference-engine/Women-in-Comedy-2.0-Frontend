import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let EditForm = (props) => {
  const { handleSubmit } = props;
  console.log(props);
  return <form onSubmit={handleSubmit}>
    <div >
      <label htmlFor="firstName">First Name</label>
      <Field name="firstName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="lastName">Last Name</label>
      <Field name="lastName" component="input" type="text" />
    </div>
    <div>
      <label htmlFor="email">Email</label>
      <Field name="email" component="input" type="email" />
    </div>
    <button type="submit">Submit</button>

  </form>
}

EditForm = reduxForm({
  form: 'userEdit'
})(EditForm)

export default EditForm
