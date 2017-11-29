import React, {Component} from 'react';
import {Field, reduxForm} from 'redux-form';
import {connect} from 'react-redux';
import axios from 'axios';

import '../css/register.css'

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      userMade: false
    }
  }
  renderTitleField(field) {
    const {
      meta: {
        touched,
        error
      }
    } = field
    const className = `form-group ${touched && error
      ? 'has-danger'
      : ''}`;

    return (<div className={className} id="field-form">
      <label>{field.label}</label>
      <input className="form-control" type="text" {...field.input} placeholder={field.label}/>
      <div className="text-help">
        {
          touched
            ? error
            : ''
        }
      </div>
    </div>);
  }

  renderPasswordField(field) {
    const {
      meta: {
        touched,
        error
      }
    } = field
    const className = `form-group ${touched && error
      ? 'has-danger'
      : ''}`;

    return (<div className={className} id="field-form">
      <label>{field.label}</label>
      <input className="form-control" type="password" {...field.input} placeholder={field.label}/>
      <div className="text-help">
        {
          touched
            ? error
            : ''
        }
      </div>
    </div>);
  }

  renderGenderField(field) {
    const {
      meta: {
        touched,
        error
      }
    } = field
    const className = `form-group ${touched && error
      ? 'has-danger'
      : ''}`;
    return (<div className={className} id="field-form">
      <label>Gender</label>
      <div>
        <label className="radio-inline">
          <input type="radio" {...field.input} value="male"/>
          Male
        </label>
        <label className="radio-inline">
          <input type="radio" {...field.input} value="female"/>
          Female
        </label>
      </div>
      <div className="text-help">
        {
          touched
            ? error
            : ''
        }
      </div>
    </div>);
  }

  renderMultipleChoice(field) {
    const {
      meta: {
        touched,
        error
      }
    } = field
    const className = `form-group ${touched && error
      ? 'has-danger'
      : ''}`;
    return (<div className={className}>
      <label>{field.label}</label>
      <div>
        <div className="radio">
          <label><input type="radio" {...field.input} value="less than 1 year"/>
            less than 1 year</label>
        </div>
        <div className="radio">
          <label><input type="radio" {...field.input} value="1-3 years"/>
            1-3 years</label>
        </div>
        <div className="radio">
          <label><input type="radio" {...field.input} value="4-7 years"/>
            4-7 years</label>
        </div>
        <div className="radio">
          <label><input type="radio" {...field.input} value="7-10 years"/>
            7-10 years</label>
        </div>
        <div className="radio">
          <label><input type="radio" {...field.input} value="11+ years"/>
            11+ years
          </label>
        </div>
      </div>
      <div className="text-help">
        {
          touched
            ? error
            : ''
        }
      </div>
    </div>);
  }

  renderCheckbox(field) {
    return (<div>
      <label className="checkbox-inline"><input type="checkbox" {...field.input}/>{field.label}</label>
    </div>)
  }

  onSubmit(values) {
    axios.post('https://qa-womenincomedy.herokuapp.com/api/v1/users', values).then(payload => {
      this.setState({userMade: true});
    }).catch(err => {
      alert(err)
    });
  }
  render() {
    const {handleSubmit} = this.props;
    if (this.state.userMade) {
      return (<div>
        Thank You For Signing Up for Women In Comedy! A confirmation email has been sent.
      </div>)
    } else {
      return (<div id="register">
        <h1>Create a New Account</h1>
        <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="First name" name="firstName" component={this.renderTitleField}/>
          <Field label="Last name" name="lastName" component={this.renderTitleField}/>
          <Field label="Email" name="email" component={this.renderTitleField}/>
          <Field label="Password" name="password" component={this.renderPasswordField}/>
          <Field label="City" name="city" component={this.renderTitleField}/>
          <Field label="Video link to Youtube/Vimeo" name="video" component={this.renderTitleField}/>
          <Field label="Link to website" name="website" component={this.renderTitleField}/>
          <Field label="Gender" name="gender" value="male" component={this.renderGenderField}/>
          <Field label="Years of comedy training" name="training" component={this.renderMultipleChoice}/>
          <Field label="Years of professional comedy working in the industry" name="experience" component={this.renderMultipleChoice}/>

          <label>Avaliable to meet for</label>
          <Field label="Coffee" name="Coffee" component={this.renderCheckbox}/>
          <Field label="Feedback/Advice" name="Feedback/Advice" component={this.renderCheckbox}/>
          <Field label="Mentorship" name="Mentorship" component={this.renderCheckbox}/>
          <Field label="New Friends In Comedy" name="New Friends In Comedy" component={this.renderCheckbox}/>
          <Field label="Open Mic Buddy" name="Open Mic Buddy" component={this.renderCheckbox}/>
          <Field label="Seeking Mentors" name="Seeking Mentors" component={this.renderCheckbox}/>

          <button className="btn btn-success" type="submit">Submit</button>
        </form>

      </div>);
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

export default reduxForm({validate, form: 'newAccountForm'})(connect(null)(RegisterForm));
