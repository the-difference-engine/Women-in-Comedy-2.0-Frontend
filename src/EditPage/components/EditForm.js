import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Field, reduxForm} from 'redux-form';

class EditForm extends Component {
  constructor(props) {
    super(props);
  }

  renderTitleField(field) {
    const {
      meta: {
        touched,
        error
      }
    } = field
    const className = `form-group row ${touched && error
      ? 'has-danger'
      : ''}`;

    return (
      <div className={className} id="field-form">
      <label className="col-sm-2 col-form-label">{field.label}</label>
      <div className="col-sm-5">
        <input className="form-control" type="text" {...field.input} placeholder={field.label}/>

        <div className="text-help">
          {
            touched
              ? error
              : ''
          }
        </div>
      </div>

    </div>
  );
  }

  render() {
    const {handleSubmit} = this.props;

    return <form onSubmit={handleSubmit}>
      {/* First Name */}
      <Field label="First Name" name="firstName" component={this.renderTitleField}/>
      {/* Last Name */}
      <Field label="Last Name" name="lastName" component={this.renderTitleField}/>
      {/* Bio/ About */}
      <div className="form-group row">
        <label htmlFor="about" className="col-sm-2 col-form-label">Bio</label>
        <div className="col-sm-5">
          <Field name="bio" className="form-control col-sm-4" component="textarea" type="text"/>
        </div>
      </div>
      {/* City */}
      <Field label="City" name="city" component={this.renderTitleField}/>

      <button type="submit" className="btn btn-danger">Submit</button>
    </form>
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
  if (!values.gender) {
    errors.gender = "Enter a gender";
  }
  if (!values.video) {
    errors.video = "Enter a video link";
  }
  if (!values.city) {
    errors.city = "Enter a city";
  }
  if (!values.training) {
    errors.training = "Enter training";
  }
  if (!values.experience) {
    errors.experience = "Enter experience";
  }
  if (!values.website) {
    errors.website = "Enter website";
  }

  return errors;
}

EditForm = reduxForm({validate, form: 'userEdit'})(EditForm)

export default EditForm
