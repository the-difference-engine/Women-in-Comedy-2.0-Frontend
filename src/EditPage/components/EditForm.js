import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';

let EditForm = (props) => {
  const { handleSubmit } = props;
  return <form onSubmit={handleSubmit}>
    <div className="form-group row">
      <label htmlFor="firstName" className="col-sm-2 col-form-label">First Name</label>
      <div className="col-sm-5">
        <Field name="firstName" className="form-control" component="input" type="text" />
      </div>

    </div>
    <div className="form-group row">
      <label htmlFor="lastName" className="col-sm-2 col-form-label">Last Name</label>
      <div className="col-sm-5">
        <Field name="lastName"  className="form-control col-sm-4" component="input" type="text" />
      </div>

    </div>
    <div className="form-group row">
      <label htmlFor="about" className="col-sm-2 col-form-label">Bio</label>
      <div className="col-sm-5">
          <Field name="bio"  className="form-control col-sm-4" component="textarea" type="text" />
      </div>

    </div>
    <button type="submit" className="btn btn-danger">Submit</button>
  </form>
}

EditForm = reduxForm({
  form: 'userEdit'
})(EditForm)

export default EditForm