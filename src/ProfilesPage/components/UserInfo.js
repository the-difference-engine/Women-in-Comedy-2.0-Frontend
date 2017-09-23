import _ from 'lodash';
import React, { Component } from 'react';
import '../css/profile-userinfo.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';


class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { superuser_show: false,
                   super_user_string: 'SuperUser!(click to show)',
                   superuser_show_two: false,
                   super_user_string_two: 'Update(click to show)!',
                   admin_term: false,
                   admin_string: 'Admin!(click to show)',
                   userMade: false }
  };
  componentWillMount() {  
    const { firstName, lastName, bio, admin, superuser } = this.props.userInfo;

  }
  onClickSuperUser() {
    console.log('onClickSuperUser');
    if(this.state.superuser_show === false) {
      this.setState({ superuser_show: true });
      this.setState({ super_user_string: 'SuperUser!(click to hide)' });

    } else if(this.state.superuser_show === true) {
      this.setState({ superuser_show: false });
      this.setState({ super_user_string: 'SuperUser!(click to show)' });
    }
      // this.setState({ superuser_term: 'hidden' });
      // this.setState({ super_user_string: 'SuperUser!(click to show)' })

  }
  onClickSuperUserTwo() {
    console.log('onClickSuperUserTwo');
    if(this.state.superuser_show_two === false) {
      this.setState({ superuser_show_two: true });
      this.setState({ super_user_string_two: 'Update(click to hide)' });
    } else if(this.state.superuser_show_two === true) {
      this.setState({ superuser_show_two: false });
      this.setState({ super_user_string_two: 'Update!(click to show)' });
    }
  }
  renderTitleField(field) {
    const { meta: {touched, error} } = field
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

    return (
      <div className={className} id="field-form">
        <label>{field.label}</label>
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
  renderTitleFieldTwo(field) {
    const { meta: {touched, error} } = field
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;

    return (
      <div className={className} id="field-form">
        <label>{field.label}</label>
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
        <label>{field.label}</label>
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
  renderGenderField(field) {
    const { meta: {touched, error} } = field
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;
    return (
      <div className={className} id="field-form">
        <label>Gender</label>
        <div>
          <label className="radio-inline">
           <input type="radio"  {...field.input} value="male"/> Male
         </label>
         <label className="radio-inline">
           <input type="radio" {...field.input} value="female"  /> Female
         </label>
        </div>
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderMultipleChoice(field) {
    const { meta: {touched, error} } = field
    const className = `form-group ${ touched && error ? 'has-danger' : '' }`;
    return (
      <div className={className}>
        <label>{field.label}</label>
        <div>
          <div className="radio">
            <label><input type="radio"  {...field.input} value="less than 1 year"  /> less than 1 year</label>
          </div>
          <div className="radio">
            <label><input type="radio"  {...field.input} value="1-3 years" /> 1-3 years</label>
          </div>
          <div className="radio">
            <label><input type="radio"  {...field.input} value="4-7 years" /> 4-7 years</label>
          </div>
          <div className="radio">
            <label><input type="radio"   {...field.input} value="7-10 years" /> 7-10 years</label>
          </div>
          <div className="radio">
            <label><input type="radio"  {...field.input} value="11+ years" /> 11+ years </label>
          </div>
        </div>
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  renderCheckbox(field) {
    return (
      <div>
        <label className="checkbox-inline"><input type="checkbox" {...field.input} />{field.label}</label>
      </div>
    )
  }

  onSubmitUpdate(values) {
    console.log('onSubmitUpdate');
    console.log('values below');
    console.log(values.userId);
    const userId = sessionStorage.getItem('userId');
    axios.post('http://localhost:9000/api/v1/users/superuserupdate', values)
      .then(payload => {
        console.log(payload)
        this.setState({ userMade: true });
        alert('user updated');
        window.location = "http://localhost:3000/profile/" + userId;
      })
      .catch(err => {alert(err)});


  }

  onSubmit(values) {
    console.log('values below');
    console.log(values);
    const userId = sessionStorage.getItem('userId');

    // axios.post('https://qa-womenincomedy.herokuapp.com/api/v1/users', values)
    axios.post('http://localhost:9000/api/v1/users', values)
      .then(payload => {
        console.log(payload)
        this.setState({ userMade: true });
        alert('user created');
        window.location = "http://localhost:3000/profile/" + userId;
      })
      .catch(err => {alert(err)});
  }


  render() {
    console.log('register');
    const { firstName, lastName, bio, admin, superuser } = this.props.userInfo
    const { updateUser } = this.props;
    const { handleSubmit } = this.props;

    if(superuser && (this.state.superuser_show === false)) {
      // if(superuser && this.state.superuser_term === 'hidden'); {
        return (
          <div id="left-side-bar-superuser">
            <div id="left-side-bar-content-superuser">
              <div id="userinfo-left">
                <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
                <p id="profile-name">{firstName} {lastName}</p>
                <p id="profile-bio-title">Bio</p>
                <p id="profile-bio-content">{bio}</p>
                  <div className="onclick" 
                       onClick={this.onClickSuperUser.bind(this)}>
                       <p id="profile-title">{this.state.super_user_string}</p>
                  </div>
              </div>
            </div>
          </div>
        );
    } else if(this.state.superuser_show === true && this.state.superuser_show_two !== true) {
        console.log('show');
        return (
          <div id="left-side-bar-superuser">
            <div id="left-side-bar-content-superuser">
              <div id="userinfo-left">
                <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
                <p id="profile-name">{firstName} {lastName}</p>
                <p id="profile-bio-title">Bio</p>
                <p id="profile-bio-content">{bio}</p>
                  <div className="onclick" 
                       onClick={this.onClickSuperUser.bind(this)}>
                       <p id="profile-title">{this.state.super_user_string}</p>
                  </div>
                  <div id="register-superuser">
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
                      <Field
                        label="City"
                        name="city"
                        component={this.renderTitleField}
                      />
                      <Field
                        label="Admin true/false"
                        name="admin"
                        component={this.renderTitleField}
                      />
                      <Field
                        label="SuperUser true/false"
                        name="superuser"
                        component={this.renderTitleField}
                        />
                        <button className="btn btn-success" type="submit">Submit</button>
                    </form>
                  <div id="onClickSuperUserTwo">
                    <div className="onclick" onClick={this.onClickSuperUserTwo.bind(this)}>
                      <p id="profile-title">{this.state.super_user_string_two}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
    } else if(superuser && (this.state.superuser_show && this.state.superuser_show_two)) {
        return (
          <div id="left-side-bar-superuser">
            <div id="left-side-bar-content-superuser">
              <div id="userinfo-left">
                <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
                <p id="profile-name">{firstName} {lastName}</p>
                <p id="profile-bio-title">Bio</p>
                <p id="profile-bio-content">{bio}</p>
                  <div id="onClickSuperUserTwo">
                    <div className="onclick" onClick={this.onClickSuperUserTwo.bind(this)}>
                      <p id="profile-title">{this.state.super_user_string_two}</p>
                    </div>
                  </div>
                  <h1>Update User!</h1>
                  <form onSubmit={handleSubmit(this.onSubmitUpdate.bind(this))}>
                    <Field 
                      label="User ID"
                      name="userId"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="Admin true/false"
                      name="admin"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="SuperUser true/false"
                      name="superuser"
                      component={this.renderTitleField}
                    />
                    <div id="button-superuser">
                      <button className="btn btn-success" type="submit">Update User</button>
                    </div>
                  </form>
              </div>
            </div>
          </div>
        );
    } 


    else if (!superuser && !admin) {
      return (
        <div id="left-side-bar-superuser">
          <div id="left-side-bar-content-superuser">
            <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
            <p id="profile-name">{firstName} {lastName}</p>
            <p id="profile-bio-title">Bio</p>
            <p id="profile-bio-content">{bio}</p>
          </div>
        </div>
      );
    } else if (!superuser && admin) {
      return (
        <div id="left-side-bar-superuser">
          <div id="left-side-bar-content-superuser">
            <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
            <p id="profile-name">{firstName} {lastName}</p>
            <p id="profile-bio-title">Bio</p>
            <p id="profile-bio-content">{bio}</p>
            <p id="profile-title">{this.state.admin_string}</p>
          </div>
        </div>
      );
    }
    return <div></div>
  }
};


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


export default reduxForm({
  validate,
  form: 'newAccountFormSuperUserAdminable',
  form: 'updatAccountForm'
})(
  connect(null)(UserInfo)
);
