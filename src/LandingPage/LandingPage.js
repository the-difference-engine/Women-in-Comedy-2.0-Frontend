import React, { Component } from 'react';
import './LandingPage.css';
import { Link } from "react-router-dom";
import { setUserLoggedIn } from "../../actions";


const LandingPage = () => {

    
    this.state = { notVerified: false };
    

    login = (e) => {
        //Stops page from refreshing when the form is submitted.
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

	return (
            
        <div className='container'>
            <div className='row'>
                <div className='col-lg-12'>
                    
                    <h1>Women in <span style={{color: 'rgba(254, 8, 101, 1)'}}>Com</span><span style={{color: 'rgba(209, 13, 13, 1)'}}>edy</span></h1>

                    <form onSubmit={this.login.bind(this)}>
                        <label>Username:</label><br />
                        <input type="text" name="username" placeholder='Username'/><br /><br />
                        <label>Password:</label><br />
                        <input type="text" name="password" placeholder='Password'/><br /><br />
                        <button className='btn'>Enter</button>
                    </form>

                    <Link to="#"><h3>Create Account</h3></Link>

                </div>
            </div>
        </div>
			
	);
}

const mapStateToProps = state => {
    const { setUserLoggedIn } = state;
    return { setUserLoggedIn };
};



export default connect(mapStateToProps, { setUserLoggedIn })(LandingPage);