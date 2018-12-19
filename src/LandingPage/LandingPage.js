import React, { Component } from 'react';
import './LandingPage.css';
import axios from "axios";
import { setUserLoggedIn } from "../actions";
import { connect } from "react-redux";
import CreateUserLink from './CreateUserLink';


class LandingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            notVerified: false
        };
    };

    goToFeedPage() {
        this.props.history.push("/feed");
    };


    login(e) {
        //Stops page from refreshing when the form is submitted.
        e.preventDefault();
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        axios
            .post(process.env.REACT_APP_API_ENDPOINT + "sessions", { email, password })
            .then(response => {
                sessionStorage.setItem("confirmed", response.data.confirmed_at);
                sessionStorage.setItem("userId", response.data.id);
                sessionStorage.setItem("adminUser", response.data.admin);

                this.props.setUserLoggedIn(true, response.data.id);

                if (response.data.confirmed_at) {
                    this.goToFeedPage();
                } else {
                    this.setState({ notVerified: true });
                }

            })
            .catch(err => {
                alert(err);
            });
    };

    render() {
        return (
            <div id='background' className="row">
                <div className="col-12">
                    <div id='landingPageRow' className='row'>
                        <div className='col-4 offset-4 colBackground'>
                            <h1 id='landingPageTitle'>Women in <span style={{ color: 'rgba(254, 8, 101, 1)' }}>Com</span><span style={{ color: 'rgba(209, 13, 13, 1)' }}>edy</span></h1>
                            <form onSubmit={this.login.bind(this)}>
                                <label className='landingPageLabel'>Username:</label><br />
                                <input className='landingPageInput' type='email' name="username" id='email' placeholder='Username' /><br /><br />
                                <label className='landingPageLabel'>Password:</label><br />
                                <input className='landingPageInput' type="password" id='password' name="password" placeholder='Password' /><br /><br />
                                <button className='btn' id='enterBtn'>Enter</button>
                            </form>
                            <CreateUserLink />
                        </div>
                    </div>
                </div>
            </div>
        )
    };
}

const mapStateToProps = ({ setUserLoggedIn }) => ({ setUserLoggedIn });

export default connect(null, { setUserLoggedIn })(LandingPage);
