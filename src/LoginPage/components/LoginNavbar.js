import React, { Component } from "react";
import axios from "axios";
import { Modal } from "../../common";
import "../css/login-navbar.css";
import { Route, Redirect } from "react-router";
import { connect } from "react-redux";
import { setUserLoggedIn } from "../../actions";
import RegisterModal from "./RegisterModal.js";

class LoginNavbar extends Component {
  constructor(props) {
    super(props);
    this.state = { notVerified: false };
  }

  goToFeedPage() {
    this.props.history.push("/feed");
  }

  login(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    // this.props.createSession(email, password);
    axios
      .post(process.env.REACT_APP_API_ENDPOINT + "sessions", { email, password })
      .then(response => {
        sessionStorage.setItem("confirmed", response.data.confirmed_at);
        sessionStorage.setItem("userId", response.data.id);
        // sessionStorage.setItem('isAdmin', response.data.admin);
        sessionStorage.setItem("adminUser", response.data.admin);

        this.props.setUserLoggedIn(true, response.data.id);

        response.data.confirmed_at
          ? this.goToFeedPage()
          : this.setState({ notVerified: true });
      })
      .catch(err => {
        alert(err);
      });
  }

  renderLoginNav() {
    return (
      <div id="navbar">
        <div id="container">
          <h1 id="login-nav-header">Women in Comedy</h1>
          <div id="form-cred">
          <form onSubmit={this.login.bind(this)}>
            <div id="login-cred">
              <div className="cred">
                <p>Email</p>
                <input id="email" />
              </div>
              <div className="cred">
                <p>Password</p>
                <input type="password" id="password" />
              </div>
              <button className="cred" type="submit">
                <span>Log in</span>
              </button>
            </div>
          </form>
          </div>
          <div className="cred">
            <RegisterModal />{" "}
          </div>
        </div>
      </div>


    );
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
    return <div>{this.renderLoginNav()}</div>;
  }
}

const mapStateToProps = state => {
  const { setUserLoggedIn } = state;
  return { setUserLoggedIn };
};
export default connect(mapStateToProps, { setUserLoggedIn })(LoginNavbar);
