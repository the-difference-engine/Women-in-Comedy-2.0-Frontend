import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { createSession } from '../../actions';
import { Modal } from '../../common';
import '../css/login-navbar.css';

class LoginNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = {notVerified: false};
  }

  Login() {
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    // this.props.createSession(email, password);
    axios.post('http://localhost:9000/api/v1/sessions', { email, password })
    .then(response => {
      console.log('reponse', response);
      sessionStorage.setItem('confirmed', response.data.confirmed_at);
      
      sessionStorage.setItem('userId', response.data.id);
      response.data.confirmed_at ? this.props.history.push('/feed') : this.setState({notVerified: true});
    })
    .catch(err => {alert(err)});
  }

  renderLoginNav() {
    return (
      <div id="navbar">
        <div id="container">
          <h1 id="login-nav-header">Women in Comedy </h1>
          <button onClick={this.Login.bind(this)}><span>Log in</span></button>
          <div className="cred">
            <p>Password</p>
            <input type="password" id="password" />
          </div>
          <div className="cred">
            <p>Email</p>
            <input  id="email"/>
          </div>
        </div>
      </div>
    )
  }

  render() {
    if (this.state.notVerified) {
      return (
        <div>
          <Modal />
          {this.renderLoginNav()}
        </div>
      );
    }
    return (
      <div>{this.renderLoginNav()}</div>
    );
  }
};



export default connect(null, { createSession })(LoginNavbar);
