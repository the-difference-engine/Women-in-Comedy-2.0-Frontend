import React, { Component } from 'react';
import axios from 'axios';
import '../css/login-navbar.css';
class LoginNavbar extends Component {
  Login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    axios.post('http://localhost:9000/api/v1/sessions', { email, password })
    .then(response => {
      document.cookie = JSON.stringify(response.data);
      console.log(document.cookie);
      console.log(response);
      this.props.history.push('/feed');
    })
    .catch(err => {alert(err)});
  }
  render() {
    return (
      <div id="navbar">
        <div id="container">
          <h1 id="login-nav-header">Women in Comedy</h1>
          <button onClick={this.Login.bind(this)}><span>Log in</span></button>
          <div className="cred">
            <p>Password</p>
            <input id="password" />
          </div>
          <div className="cred">
            <p>Email</p>
            <input  id="email"/>
          </div>
        </div>
      </div>
    );
  }
};

const Login = () => {

};

export default LoginNavbar;
