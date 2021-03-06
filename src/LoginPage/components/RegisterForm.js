import React, { Component } from "react";
import { connect } from "react-redux";
import firebase from "firebase";
import axios from "axios";
import {
  RaisedButton,
  SelectField,
  MenuItem} from "material-ui";
import {
  TextValidator,
  ValidatorForm} from "react-material-ui-form-validator";
import "../css/register.css";
import holder from "../images/holder.jpg";
import { fetchMeetingOptions } from "../../actions";

class RegisterForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
      // imgURL: "https://image.freepik.com/free-icon/female-student-silhouette_318-62252.jpg",
      imgURL: null
    };

    this.handleChange = this.handleChange.bind(this);
    this.renderMenuItems = this.renderMenuItems.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchMeetingOptions();
  }

  renderMenuItems() {
    return this.props.allMeetingOptions.map(item =>
      (
        <MenuItem
          key={item.id}
          primaryText={item.name}
          value={item.id}
          insetChildren={true}
          checked={
            this.state.user.meet_options &&
            this.state.user.meet_options.indexOf(item.id) > -1
          }
        />
      )
    );
  }

  selectionRenderer(values) {
    switch (values.length) {
      case 0:
        return "";
      case 1:
        return this.props.allMeetingOptions[values[0] - 1].name;
      default:
        return `${values.length} options selected`;
    }
  };

  handleChange(event) {
    const { user } = this.state;
    user[event.target.name] = event.target.value;
    this.setState({ user });
  }

  onClick() {
    const input = document.getElementById("input");
    input.click();
  }

  renderImg() {
    if (this.state.imgURL) {
      return (
        <div>
          <img
            id="img"
            src={this.state.imgURL}
            alt=""
            width="250"
            height="250"
          />
        </div>
      );
    } else {
      return (
        <div>
          <img
            id="img"
            src={holder}
            alt=""
            width="250"
            height="250"
          />
        </div>
      );
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

  storeProfilePicture() {
    const ext = this.state.img.name.slice(this.state.img.name.lastIndexOf('.'));
    return firebase.storage()
      .ref(`/users/${this.state.user.first_name}${this.state.user.last_name}${ext}`)
      .put(this.state.img)
      .then(snapshot => {
        this.state.user.photo = snapshot.downloadURL;
      });
  };

  onSubmit() {
    let user = this.state.user
    let { first_name, last_name, email, password, city, experience, training, video_link, website } = user

    if (this.state.imgURL && this.state.imgURL.startsWith("data:image")) {
      this.storeProfilePicture()
        .then(() => {
          axios({
            method: 'post',
            url: process.env.REACT_APP_API_ENDPOINT + 'users',
            data: { first_name, last_name, email, password, city, experience, training, video_link, website }
          })
        }).then(() => {
          this.setState({ userMade: true });
        }).catch(err => {
          alert(err)
        });
    }
    else {
      axios({
        method: 'post',
        url: process.env.REACT_APP_API_ENDPOINT + 'users',
        data: { first_name, last_name, email, password, city, experience, training, video_link, website }
      }).then(() => {
        this.setState({ userMade: true });
      }).catch(err => {
        alert(err)
      });
    }
  }

  render() {
    if (this.state.userMade) {
      return (
        <div>
          Thank You For Signing Up for Women In Comedy! A confirmation email has
          been sent.
        </div>
      );
    } else {
      return (
        <div>
          <h1>Create a New Account</h1>
          <div className="container">
            <div>
              <ValidatorForm
                onSubmit={this.onSubmit}
              >
                <div>
                  <TextValidator
                    floatingLabelText="First Name"
                    onChange={this.handleChange}
                    name="first_name"
                    type="text"
                    underlineFocusStyle={{ display: 'none' }}
                    floatingLabelFocusStyle={{ color: 'red' }}
                    validators={['required']}
                    errorMessages={['First Name is required']}
                    value={this.state.user.first_name}
                  />
                </div>
                <div>
                  <TextValidator
                    floatingLabelText="Last Name"
                    onChange={this.handleChange}
                    name="last_name"
                    type="text"
                    underlineFocusStyle={{ display: 'none' }}
                    floatingLabelFocusStyle={{ color: 'red' }}
                    validators={['required']}
                    errorMessages={['Last Name is required']}
                    value={this.state.user.last_name}
                  />
                </div>
                <div>
                  <TextValidator
                    floatingLabelText="Email Address"
                    onChange={this.handleChange}
                    name="email"
                    type="text"
                    underlineFocusStyle={{ display: 'none' }}
                    floatingLabelFocusStyle={{ color: 'red' }}
                    validators={['required']}
                    errorMessages={['Email is required']}
                    value={this.state.user.email}
                  />
                </div>
                <div>
                  <TextValidator
                    floatingLabelText="Password"
                    onChange={this.handleChange}
                    name="password"
                    type="password"
                    underlineFocusStyle={{ display: 'none' }}
                    floatingLabelFocusStyle={{ color: 'red' }}
                    validators={['required']}
                    errorMessages={['Password is required']}
                    value={this.state.user.password}
                  />
                </div>
                <div>
                  <TextValidator
                    floatingLabelText="City"
                    onChange={this.handleChange}
                    name="city"
                    type="text"
                    underlineFocusStyle={{ display: 'none' }}
                    floatingLabelFocusStyle={{ color: 'red' }}
                    validators={['required']}
                    errorMessages={['City is required']}
                    value={this.state.user.city}
                  />
                </div>
                <div>
                  <TextValidator
                    floatingLabelText="Youtube Video"
                    onChange={this.handleChange}
                    name="video_link"
                    type="text"
                    underlineFocusStyle={{ display: 'none' }}
                    floatingLabelFocusStyle={{ color: 'red' }}
                    validators={['required']}
                    errorMessages={['Video link is required']}
                    value={this.state.user.video_link}
                  />
                </div>
                <div>
                  <TextValidator
                    floatingLabelText="Website"
                    onChange={this.handleChange}
                    name="website"
                    type="text"
                    underlineFocusStyle={{ display: 'none' }}
                    floatingLabelFocusStyle={{ color: 'red' }}
                    validators={['required']}
                    errorMessages={['Website is required']}
                    value={this.state.user.website}
                  />
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
                    name="experience"
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
                <div>
                  <SelectField
                    floatingLabelText="Available to meet for"
                    onChange={(event, index, values) => {
                      const { user } = this.state;
                      user.meet_option_users_attributes = values;
                      this.setState({ user });
                    }}
                    value={this.state.user.meet_option_users_attributes}
                    name="meet_option_users_attributes"
                    multiple={true}
                    selectionRenderer={this.selectionRenderer.bind(this)}
                    underlineFocusStyle={{ display: 'none' }}
                    floatingLabelFocusStyle={{ color: 'red' }}
                  >
                    {this.renderMenuItems()}
                  </SelectField>
                </div>
                <RaisedButton
                  secondary
                  label="upload image"
                  onClick={this.onClick.bind(this)}
                />
                <input type="file" id="input" style={{ display: 'none' }} onChange={this.onUpload.bind(this)} /><br />

                {this.renderImg()}

                <RaisedButton
                  secondary
                  label="register"
                  type="submit"
                  style={{ marginTop: "15px" }}
                />
              </ValidatorForm>
            </div>
          </div>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  const { allMeetingOptions } = state;
  return { allMeetingOptions };
}

export default connect(mapStateToProps, { fetchMeetingOptions })(RegisterForm);

