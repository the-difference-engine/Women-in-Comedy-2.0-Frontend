import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import firebase from 'firebase'
import axios from 'axios'
// import {  createEvent, fetchUserInfo, eventInputChange } from '../../actions';
import { TextField, RaisedButton, CircularProgress, SelectField, MenuItem, Label } from 'material-ui';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';
import { TextValidator, ValidatorForm, SelectValidator } from 'react-material-ui-form-validator';
import '../css/register.css'
import createFragment from 'react-addons-create-fragment';

class RegisterForm extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {},
      imgURL: null
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleDropdownChange = this.handleDropdownChange.bind(this);

  }

  handleChange(event) {
    const { user } = this.state;
    console.log(event.target.name);
    user[event.target.name] = event.target.value;
    this.state.user = user;
  }

  handleDropdownChange(event, index, value) {
    console.log(event.target);
    const { user } = this.state;
    user.training = value;
    this.setState({ user });
    // console.log(this.state.user);
  }

  onClick() {
    const input = document.getElementById('input');
    input.click();
  }

  renderImg() {
    if (this.state.imgURL) {
      return <img id="img" src={this.state.imgURL} alt="" width="250" height="250" />
    }
  }

  onUpload(event) {
    const file = event.target.files;
    const fileReader = new FileReader();

    fileReader.readAsDataURL(file[0]);
    fileReader.onload = () => {
      this.setState({ imgURL: fileReader.result, img: file[0] });
    };
  }

  async storeProfilePicture() {
    const ext = this.state.img.name.slice(this.state.img.name.lastIndexOf('.'));
    const imageData = await firebase.storage().ref(`/users/${this.state.user.firstName + this.state.user.lastName}${ext}`).put(this.state.img);
    this.state.user.photo = imageData.metadata.downloadURLs[0];
  }

  onSubmit(values) {
    this.storeProfilePicture();
    console.log("values: " + values);
    axios.post("http://localhost:9000/api/v1/users", values).then(payload => {
      this.setState({ userMade: true });
    }).catch(err => {
      alert(err)
    });
    console.log(this.state.user);
    this.setState({ userMade: true })
  }
  render() {
    const { handleSubmit } = this.props;
    if (this.state.userMade) {
      return (<div>
        Thank You For Signing Up for Women In Comedy! A confirmation email has been sent.
      </div>)
    } else {
      return (<div id="register">
        <h1>Create a New Account</h1>
        <div>
          <div>

            <ValidatorForm
              // onSubmit={this.handleSubmit}
              onSubmit={this.onSubmit}
            >
              <div>
                <TextField
                  floatingLabelText="First Name"
                  onChange={this.handleChange}
                  name="firstName"
                  type="text"
                  // value={this.state.user.firstName}
                  // validators={['required']}
                  // errorMessages={['this field is required']}
                  underlineFocusStyle={{ display: 'none' }}
                  floatingLabelFocusStyle={{ color: 'red' }}
                />
              </div>
              <div>
                <TextValidator
                  floatingLabelText="Last Name"
                  onChange={this.handleChange}
                  name="lastName"
                  type="text"
                  // validators={['required']}
                  // errorMessages={['this field is required']}
                  underlineFocusStyle={{ display: 'none' }}
                  floatingLabelFocusStyle={{ color: 'red' }}
                />
              </div>
              <div>
                <TextValidator
                  floatingLabelText="Email Address"
                  onChange={this.handleChange}
                  name="email"
                  type="text"
                  // validators={['required', 'isEmail']}
                  // errorMessages={['this field is required', 'email is not valid']}
                  underlineFocusStyle={{ display: 'none' }}
                  floatingLabelFocusStyle={{ color: 'red' }}
                />
              </div>
              <div>
                <TextValidator
                  floatingLabelText="Password"
                  onChange={this.handleChange}
                  name="password"
                  type="password"
                  // validators={['required']}
                  // errorMessages={['this field is required']}
                  underlineFocusStyle={{ display: 'none' }}
                  floatingLabelFocusStyle={{ color: 'red' }}
                />
              </div>
              <div>
                <TextValidator
                  floatingLabelText="city"
                  onChange={this.handleChange}
                  name="city"
                  type="text"
                  // validators={['required']}
                  // errorMessages={['this field is required']}
                  underlineFocusStyle={{ display: 'none' }}
                  floatingLabelFocusStyle={{ color: 'red' }}
                />
              </div>
              <div>
                <TextValidator
                  floatingLabelText="Youtube Video"
                  onChange={this.handleChange}
                  name="video"
                  type="text"
                  // validators={['required']}
                  // errorMessages={['this field is required']}
                  underlineFocusStyle={{ display: 'none' }}
                  floatingLabelFocusStyle={{ color: 'red' }}
                />
              </div>
              <div>
                <TextValidator
                  floatingLabelText="Website"
                  onChange={this.handleChange}
                  name="website"
                  type="text"
                  // validators={['required']}
                  // errorMessages={['this field is required']}
                  underlineFocusStyle={{ display: 'none' }}
                  floatingLabelFocusStyle={{ color: 'red' }}
                />
              </div>
              <div>
                <label>Gender</label>
                <RadioButtonGroup 
                  name="gender" 
                  label="Gender"
                  onChange={this.handleChange}>
                  <RadioButton
                    value="Female"
                    label="Female"
                  />
                  <RadioButton
                    value="Male"
                    label="Male"
                  />
                </RadioButtonGroup>
              </div>
              <div>
                <SelectField
                  floatingLabelText="Years of Experience"
                  onChange={(event, index, value) => {
                    const { user } = this.state;
                    user.experience = value;
                    this.setState({ user });
                  }}
                  value={this.state.user.experience}
                  name="training"
                  underlineFocusStyle={{ display: 'none' }}
                  floatingLabelFocusStyle={{ color: 'red' }}
                >
                  <MenuItem primaryText="Less than 1 year" value="Less than 1 year" />
                  <MenuItem primaryText="1-3 years" value="1-3 years" />
                  <MenuItem primaryText="4-7 years" value="4-7 years" />
                  <MenuItem primaryText="7-10 years" value="7-10 years" />
                  <MenuItem primaryText="11+ years" value="11+ years" />
                </SelectField>
              </div>
              <div>
                <SelectField
                  floatingLabelText="Years of Comedy Training"
                  onChange={(event, index, value) => {
                    const { user } = this.state;
                    user.training = value;
                    this.setState({ user });
                  }}
                  value={this.state.user.training}
                  name="training"
                  underlineFocusStyle={{ display: 'none' }}
                  floatingLabelFocusStyle={{ color: 'red' }}
                >
                  <MenuItem primaryText="Less than 1 year" value="Less than 1 year" />
                  <MenuItem primaryText="1-3 years" value="1-3 years" />
                  <MenuItem primaryText="4-7 years" value="4-7 years" />
                  <MenuItem primaryText="7-10 years" value="7-10 years" />
                  <MenuItem primaryText="11+ years" value="11+ years" />
                </SelectField>
              </div>
              <RaisedButton
                secondary
                label="upload image"
                onClick={this.onClick.bind(this)}
              // disabled={loading}
              />
              <input type="file" id="input" style={{ display: 'none' }} onChange={this.onUpload.bind(this)} /><br />
              {this.renderImg()}
              <RaisedButton
                secondary
                label="register"
                type="submit"
                onClick={this.onSubmit.bind(this)}
                style={{ marginTop: '15px' }}
              // disabled={loading}
              />
            </ValidatorForm>
          </div>




          {/* <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
          <Field label="First name" name="firstName" component={this.renderTitleField}/>
          <Field label="Last name" name="lastName" component={this.renderTitleField}/>
          <Field label="Email" name="email" component={this.renderTitleField}/>
          <Field label="Password" name="password" component={this.renderPasswordField}/>
          <Field label="Profile Picture" name="profilePhoto" component={this.renderImageUpload}/>
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
        </form> */}

        </div>
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

export default reduxForm({ validate, form: 'newAccountForm' })(connect(null)(RegisterForm));
