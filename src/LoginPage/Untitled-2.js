import React, { Component } from "react"
import { connect } from 'react-redux'
import { reduxForm } from 'redux-form'
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"

class RegisterForm1 extends Component {
    constructor(props) {
    super(props)    
        this.state.user = {
            first_Name:"",
            lastName:"",
            email:"",
            password:"",
            city:"", 
            video:"",
            website:"",
        }
    };

   validate = (e) => {
     let isError = false;
        const errors = {
            firstNameError: "",
            lastNameError: "",
            emailError: "",
            passwordError: "",
            cityError: "",
            videoError: "",
            websiteError: ""
    };

    if (this.state.first_Name.length < 1) {
      isError = true;
      errors.firstNameError = "Enter First Name";
    }
      
    if (this.state.lastName.length < 1) {
      isError = true;
      errors.lastNameError = "Enter Last Name";
    }

    if (this.state.email.indexOf("@") === -1) {
      isError = true;
      errors.emailError = "Requires valid email";
    }

    this.setState({
      ...this.state,
      ...errors
    });

    return isError;
  };

handleChange(e){
    var change = {}
    change[e.target.name] = e.target.value;
    this.setState(change)
}
/* handleChange = (e) => {
    this.setState({ value: e.target.value});
  }; */

  onClick() {
    const input = document.getElementById('input');
    input.click();
  }

  onSubmit = e => {
    e.preventDefault();
    // this.props.onSubmit(this.state);
    const err = this.validate();
    if (!err) {
      // clear form
      this.setState({
        first_Name: "",
        firstNameError: "",
        lastName: "",
        lastNameError: "",
        email: "",
        emailError: "",
        password: "",
        passwordError: "",
        city: "",
        cityError: "",
        video: "",
        videoError: "",
        website: "",
        websiteError: ""
      });
    }
  }

  render() {
    return (
      <form>
        <TextField
          name="first_Name"
          hintText="First Name"
          floatingLabelText="First Name"
          value={this.state.first_Name}
          onChange= {this.handleChange.bind(this)}/*{ (e) => this.handleChange(e, 'first_Name') } */
          errorText={this.state.firstNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="lastName"
          hintText="Last Name"
          floatingLabelText="Last Name"
          value={this.state.lastName}
          onChange= {this.handleChange.bind(this)} //onChange={e => this.setState({ lastName: e.target.value})}
          errorText={this.state.lastNameError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="email"
          hintText="Email"
          floatingLabelText="Email"
          value={this.state.email}
          onChange= {this.handleChange.bind(this)}//onChange={e => this.setState({ email: e.target.value})}
          errorText={this.state.emailError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="password"
          hintText="Password"
          floatingLabelText="Password"
          value={this.state.password}
          onChange= {this.handleChange.bind(this)}//onChange={e => this.change(e)}
          errorText={this.state.passwordError}
          type="password"
          floatingLabelFixed
        />
        <br />
        <TextField
          name="city"
          hintText="City"
          floatingLabelText="City"
          value={this.state.city}
          onChange= {this.handleChange.bind(this)}//onChange={e => this.setState({ city: e.target.value})}
          errorText={this.state.cityError}
          floatingLabelFixed
        />
        <br />
        <TextField
          name="video"
          hintText="YoutTube Video"
          floatingLabelText="Youtube Video"
          value={this.state.video}
          onChange= {this.handleChange.bind(this)}//onChange={e => this.setState({ video : e.target.value})}
          errorText={this.state.videoError}
          type="video"
          floatingLabelFixed
        />
        <br />
        <TextField
          name="Website"
          hintText="Website"
          floatingLabelText="Website"
          value={this.state.website}
          onChange= {this.handleChange.bind(this)}//onChange={e => this.setState({ website: e.target.value})}
          errorText={this.state.websiteError}
          floatingLabelFixed
        />
        <br />
        <RaisedButton label="Submit" onClick={e => this.onSubmit(e)} primary />
      </form>
    );
  }
}

export default reduxForm({ form: 'newAccountForm' })(connect(null)(RegisterForm1));