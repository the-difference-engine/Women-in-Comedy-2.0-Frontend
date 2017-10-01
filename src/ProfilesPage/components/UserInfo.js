import _ from 'lodash';
import React, { Component } from 'react';
import '../css/profile-userinfo.css';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import axios from 'axios';


class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = { super_user_show: false,
                   super_user_string: 'SuperUser!(click to show)',
                   super_user_show_two: false,
                   super_user_string_two: 'Update!(click to show)',
                   super_user_show_three: false,
                   super_user_string_three: 'Delete!(click to show)',
                   super_user_show_one: false,
                   super_user_string_one: 'Create!(click to show)',
                   admin_term: false,
                   admin_string: 'Admin!(click to show)',
                   userMade: false,
                   term: '',
                   selectValue: '',
                   search_variable: 'firstName'

                  }
    this.updateTerm = this.updateTerm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };
  componentWillMount() {  
    const { firstName, lastName, bio, admin, super_user } = this.props.userInfo;
    const { fetchUsers } = this.props.allUsers;

  }
  handleChange(e) {
    const value = e.target.value;
    console.log('value below');
    console.log(value);
    this.setState({ selectValue: value });
    this.setState({ search_variable: value });
  }

  onClickSuperUser() {
    console.log('onClickSuperUser');
    if(this.state.super_user_show === false) {
      this.setState({ super_user_show: true });
      this.setState({ super_user_string: 'SuperUser!(click to hide)' });

    } else if(this.state.super_user_show === true) {
      this.setState({ super_user_show: false });
      this.setState({ super_user_string: 'SuperUser!(click to show)' });
    }
      // this.setState({ superuser_term: 'hidden' });
      // this.setState({ super_user_string: 'SuperUser!(click to show)' })

  }
  onClickSuperUserOne() {
    console.log('onClickSuperUserOne');
    if(this.state.super_user_show_one === false) {
      this.setState({ super_user_show_one: true });
      this.setState({ super_user_show: false });
      this.setState({ super_user_string_one: 'Create!(click to hide)' });
    } else if(this.state.super_user_show_one === true) {
      this.setState({ super_user_show_one: false });
      this.setState({ super_user_show: true });
      this.setState({ super_user_string_one: 'Create!(click to show)' });
    }
  }
  onClickSuperUserTwo() {
    console.log('onClickSuperUserTwo');
    if(this.state.super_user_show_two === false) {
      this.setState({ super_user_show_two: true });
      this.setState({ super_user_string_two: 'Update(click to hide)' });

    } else if(this.state.super_user_show_two === true) {
      this.setState({ super_user_show_two: false });
      this.setState({ super_user_string_two: 'Update!(click to show)' });
    }
    console.log('super_user_show');
    console.log(this.state.super_user_show);
    console.log('super_user_show_two');
    console.log(this.state.super_user_show_two);
    console.log('super_user_show_three');
    console.log(this.state.super_user_show_three);


  }
  onClickSuperUserThree() {
    console.log('onClickSuperUserThree');

    if(this.state.super_user_show_three === false) {
      this.setState({ super_user_show_three: true });
      this.setState({ super_user_show_two: false });
      this.setState({ super_user_show_one: false });
      this.setState({ super_user_show: false });
      this.setState({ super_user_string_three: 'Delete!(click to hide)' });
    } else if(this.state.super_user_show_three === true) {
      this.setState({ super_user_show_three: false });
      this.setState({ super_user_show: true });
      this.setState({ super_user_string_three: 'Delete!(click to show)' });
    }
    console.log('super_user_show');
    console.log(this.state.super_user_show);
    console.log('super_user_show_two');
    console.log(this.state.super_user_show_two);
    console.log('super_user_show_three');
    console.log(this.state.super_user_show_three);
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

  onSubmitDelete(userId) {
    console.log('onSubmitDelete', userId);
    console.log('id below');
    console.log(userId);
    const superId = sessionStorage.getItem('userId');
    if(superId === userId.userId) {
      alert('You cannot delete your account to ensure there is always at least one superuser')
    } else {
      axios.post('http://localhost:9000/api/v1/users/superuser/delete_user', userId)
        .then(payload => {
          console.log('delete payload below');
          console.log(payload);
          this.setState({ userMade: true });
          alert('User Deleted');
          window.location = "http://localhost:3000/profile/" + superId;
        })
        .catch(err => {alert(err)});
    }

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

  updateTerm(term) {
    this.setState({ term: term.substr(0, 50)});
    console.log(term);
  }


  render() {
    console.log('register');
    const { firstName, lastName, bio, admin, super_user } = this.props.userInfo
    const { allUsers } = this.props;
    const { updateUser } = this.props;
    const { handleSubmit } = this.props;
    console.log('users below K_K');
    console.log(allUsers);
    
    let filteredUsers = allUsers.filter((user) => {
      console.log('this.state.search_variable below');
      console.log(this.state.search_variable);
      if(this.state.search_variable === 'firstName') {
        return user.firstName.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'lastName') {
        return user.lastName.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;        
      } else if(this.state.searc_variable === 'about') {
        return user.about.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'birthdate') {
        return user.birthdate.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'city') {
        return user.city.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'email') {
        return user.email.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'experience') {
        return user.experience.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'gender') {
        return user.gender.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'id') {
        return user.id.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'lastSignInAt') {
        return user.lastSignInAt.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'lastSignInIP') {
        return user.lastSignInIP.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'currentSignInAt') {
        return user.lastSignInAt.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'currentSignInIP') {
        return user.currentSignInIP.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'meeting') {
        return user.meeting.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'provider') {
        return user.provider.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'resetPasswordSentAt') {
        return user.resetPasswordSentAt.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'resetPasswordToken') {
        return user.resetPasswordToken.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'signInCount') {
        return user.signInCount.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'training') {
        return user.training.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'videoLink') {
        return user.videoLink.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      } else if(this.state.search_variable === 'website') {
        return user.website.toLowerCase().indexOf(this.state.term.toLowerCase()) !== -1;
      }
    });
    console.log('filteredUsers');
    console.log(filteredUsers);


    if(super_user && ((this.state.super_user_show === false && this.state.super_user_show_one === false) && (this.state.super_user_show_two === false && this.state.super_user_show_three === false))) {
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
                    <h4 id="dropdown_desc"> Choose Profile Field </h4>
                      <select 
                        value={this.state.selectValue} 
                        onChange={this.handleChange} 
                        >
                        <option value="firstName">firstName</option>
                        <option value="lastName">lastName</option>
                        <option value="city">city</option>
                        <option value="about">about</option>
                        <option value="birthdate">birthdate</option>
                        <option value="currentSignInAt">currentSignInAt</option>
                        <option value="currentSignInIP">currentSignInIP</option>
                        <option value="lastSignInIP">lastSignInIP</option>
                        <option value="lastSignInAt">lastSignInAt</option>
                        <option value="meeting">meeting</option>
                        <option value="provider">provider</option>
                        <option value="resetPasswordSentAt">resetPasswordSentAt</option>
                        <option value="resetPasswordToken">resetPasswordToken</option>
                        <option value="signInCount">signInCount</option>
                        <option value="training">training</option>
                        <option value="videoLink">videoLink</option>
                        <option value="website">website</option>



                      </select>
                  <input type="text" value={this.state.term} onChange={event => this.updateTerm(event.target.value)} placeholder="admin search"/>
              </div>
            </div>
          </div>
        );
    } else if(super_user && (this.state.super_user_show ===  true && this.state.super_user_show_one === false) && (this.state.super_user_show_two === false && this.state.super_user_show_three === false)) {
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
                    <h4 id="dropdown_desc"> Choose Profile Field </h4>
                      <select 
                        value={this.state.selectValue} 
                        onChange={this.handleChange} 
                        >
                        <option value="firstName">firstName</option>
                        <option value="lastName">lastName</option>
                        <option value="city">city</option>
                        <option value="about">about</option>
                        <option value="birthdate">birthdate</option>
                        <option value="currentSignInAt">currentSignInAt</option>
                        <option value="currentSignInIP">currentSignInIP</option>
                        <option value="lastSignInIP">lastSignInIP</option>
                        <option value="lastSignInAt">lastSignInAt</option>
                        <option value="meeting">meeting</option>
                        <option value="provider">provider</option>
                        <option value="resetPasswordSentAt">resetPasswordSentAt</option>
                        <option value="resetPasswordToken">resetPasswordToken</option>
                        <option value="signInCount">signInCount</option>
                        <option value="training">training</option>
                        <option value="videoLink">videoLink</option>
                        <option value="website">website</option>



                      </select>
              <input type="text" value={this.state.term} onChange={this.updateTerm} placeholder="admin search" />
              <div id="onClickSuperUserOne">
                <div className="onclick" onClick={this.onClickSuperUserOne.bind(this)}>
                  <p id="profile-title">{this.state.super_user_string_one}</p>
                </div>
              </div>
              <div id="onClickSuperUserTwo">
                <div className="onclick" onClick={this.onClickSuperUserTwo.bind(this)}>
                  <p id="profile-title">{this.state.super_user_string_two}</p>
                </div>
              </div>
              <div id="onClickSuperUserThree">
                <div className="onclick" onClick={this.onClickSuperUserThree.bind(this)}>
                  <p id="profile-title">{this.state.super_user_string_three}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    } else if(super_user && (this.state.super_user_show_one === true && this.state.super_user_show_two !== true) && (this.state.super_user_show_three !== true)) {
        console.log('show');
        return (
          <div id="left-side-bar-superuser">
            <div id="left-side-bar-content-superuser">
              <div id="userinfo-left">
                <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
                <p id="profile-name">{firstName} {lastName}</p>
                <p id="profile-bio-title">Bio</p>
                <p id="profile-bio-content">{bio}</p>
                <div id="onClickSuperUserOne">
                  <div className="onclick" 
                       onClick={this.onClickSuperUserOne.bind(this)}>
                       <p id="profile-title">{this.state.super_user_string_one}</p>
                  </div>
                    <h4 id="dropdown_desc"> Choose Profile Field </h4>
                      <select 
                        value={this.state.selectValue} 
                        onChange={this.handleChange} 
                        >
                        <option value="firstName">firstName</option>
                        <option value="lastName">lastName</option>
                        <option value="city">city</option>
                        <option value="about">about</option>
                        <option value="birthdate">birthdate</option>
                        <option value="currentSignInAt">currentSignInAt</option>
                        <option value="currentSignInIP">currentSignInIP</option>
                        <option value="lastSignInIP">lastSignInIP</option>
                        <option value="lastSignInAt">lastSignInAt</option>
                        <option value="meeting">meeting</option>
                        <option value="provider">provider</option>
                        <option value="resetPasswordSentAt">resetPasswordSentAt</option>
                        <option value="resetPasswordToken">resetPasswordToken</option>
                        <option value="signInCount">signInCount</option>
                        <option value="training">training</option>
                        <option value="videoLink">videoLink</option>
                        <option value="website">website</option>



                      </select>
                  <input type="text" value={this.state.term} onChange={this.updateTerm} placeholder="admin search" />
                </div>
                  <div id="register-superuser">
                    <h1>Create User!</h1>
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
                        <button className="btn btn-success" type="submit">Submit</button>
                    </form>
                </div>
              </div>
            </div>
          </div>
        );
    } else if (super_user && (this.state.super_user_show_one === false) && (this.state.super_user_show_two === true && this.state.super_user_show_three === false)) {
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
                    <h4 id="dropdown_desc"> Choose Profile Field </h4>
                      <select 
                        value={this.state.selectValue} 
                        onChange={this.handleChange} 
                        >
                        <option value="firstName">firstName</option>
                        <option value="lastName">lastName</option>
                        <option value="city">city</option>
                        <option value="about">about</option>
                        <option value="birthdate">birthdate</option>
                        <option value="currentSignInAt">currentSignInAt</option>
                        <option value="currentSignInIP">currentSignInIP</option>
                        <option value="lastSignInIP">lastSignInIP</option>
                        <option value="lastSignInAt">lastSignInAt</option>
                        <option value="meeting">meeting</option>
                        <option value="provider">provider</option>
                        <option value="resetPasswordSentAt">resetPasswordSentAt</option>
                        <option value="resetPasswordToken">resetPasswordToken</option>
                        <option value="signInCount">signInCount</option>
                        <option value="training">training</option>
                        <option value="videoLink">videoLink</option>
                        <option value="website">website</option>



                      </select>
                    <input type="text" value={this.state.term} onChange={this.updateTerm} placeholder="admin search" />
                  </div>
                  <h1>Update User!</h1>
                  <form onSubmit={handleSubmit(this.onSubmitUpdate.bind(this))}>
                    <Field 
                      label="User ID"
                      name="userId"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="Email"
                      name="update_email"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="City"
                      name="city"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="About"
                      name="about"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="Website"
                      name="update_website"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="Video Link"
                      name="video_lik"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="Training"
                      name="update_training"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="Experience"
                      name="update_experience"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="UID"
                      name="uid"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="Provider"
                      name="provider"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="Meeting"
                      name="meeting"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="Birthdate"
                      name="birthdate"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="First Name"
                      name="first_name"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="Last Name"
                      name="last_name"
                      component={this.renderTitleField}
                    />
                    <Field
                      label="Admin true/false"
                      name="admin"
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
    } else if(super_user && (this.state.super_user_show === false && this.state.super_user_show_one === false) && (this.state.super_user_show_two === false && this.state.super_user_show_three === true)) {
       return (
          <div id="left-side-bar-superuser">
            <div id="left-side-bar-content-superuser">
              <div id="userinfo-left">
                <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
                <p id="profile-name">{firstName} {lastName}</p>
                <p id="profile-bio-title">Bio</p>
                <p id="profile-bio-content">{bio}</p>
                  <div id="onClickSuperUserThree">
                    <div className="onclick" onClick={this.onClickSuperUserThree.bind(this)}>
                      <p id="profile-title">{this.state.super_user_string_three}</p>
                    </div>
                    <h4 id="dropdown_desc"> Choose Profile Field </h4>
                      <select 
                        value={this.state.selectValue} 
                        onChange={this.handleChange} 
                        >
                        <option value="firstName">firstName</option>
                        <option value="lastName">lastName</option>
                        <option value="city">city</option>
                        <option value="about">about</option>
                        <option value="birthdate">birthdate</option>
                        <option value="currentSignInAt">currentSignInAt</option>
                        <option value="currentSignInIP">currentSignInIP</option>
                        <option value="lastSignInIP">lastSignInIP</option>
                        <option value="lastSignInAt">lastSignInAt</option>
                        <option value="meeting">meeting</option>
                        <option value="provider">provider</option>
                        <option value="resetPasswordSentAt">resetPasswordSentAt</option>
                        <option value="resetPasswordToken">resetPasswordToken</option>
                        <option value="signInCount">signInCount</option>
                        <option value="training">training</option>
                        <option value="videoLink">videoLink</option>
                        <option value="website">website</option>



                      </select>
                    <input type="text" value={this.state.term} onChange={this.updateTerm} placeholder="admin search" />
                  </div>
                  <h1>Delete User!</h1>
                  <form onSubmit={handleSubmit(this.onSubmitDelete.bind(this))}>
                    <Field 
                      label="User Id"
                      name="userId"
                      component={this.renderTitleField}
                    />
                    <div id="button-superuser">
                      <button className="btn btn-success" type="submit">Delete User</button>
                    </div>
                  </form>
              </div>
            </div>
          </div>
      );
    }
     else if (!super_user && !admin) {
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
    } else if (!super_user && admin) {
      return (
        <div id="left-side-bar-superuser">
          <div id="left-side-bar-content-superuser">
            <div id="userinfo-left">
              <img id="profile-img" src="https://u.o0bc.com/avatars/no-user-image.gif" alt="" />
              <p id="profile-name">{firstName} {lastName}</p>
              <p id="profile-bio-title">Bio</p>
              <p id="profile-bio-content">{bio}</p>
              <p id="profile-title">{this.state.admin_string}</p>
                    <h4 id="dropdown_desc"> Choose Profile Field </h4>
                      <select 
                        value={this.state.selectValue} 
                        onChange={this.handleChange} 
                        >
                        <option value="firstName">firstName</option>
                        <option value="lastName">lastName</option>
                        <option value="city">city</option>
                        <option value="about">about</option>
                        <option value="birthdate">birthdate</option>
                        <option value="currentSignInAt">currentSignInAt</option>
                        <option value="currentSignInIP">currentSignInIP</option>
                        <option value="lastSignInIP">lastSignInIP</option>
                        <option value="lastSignInAt">lastSignInAt</option>
                        <option value="meeting">meeting</option>
                        <option value="provider">provider</option>
                        <option value="resetPasswordSentAt">resetPasswordSentAt</option>
                        <option value="resetPasswordToken">resetPasswordToken</option>
                        <option value="signInCount">signInCount</option>
                        <option value="training">training</option>
                        <option value="videoLink">videoLink</option>
                        <option value="website">website</option>



                      </select>
              <input type="text" value={this.state.term} onChange={this.updateTerm} placeholder="admin search" />
            </div>
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

const renderUsers = (users) => {
  return _.map(users, user => {
    return (
      <div key={user.id}>
        {user}
      </div>
    );
  });
}

export default reduxForm({
  validate,
  form: 'newAccountFormSuperUserAdminable',
  form: 'updatAccountForm'
})(
  connect(null)(UserInfo)
);