import React, { Component } from 'react';
import './LandingPage.css';
import { Link, withRouter } from "react-router-dom";

class LandingPage extends Component {
	render () {
		return (
            
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-12'>
                    
                        <h1>Women in <span style='color: rgba(254, 8, 101, 1);'>Com</span><span style='color: rgba(209, 13, 13, 1);'>edy</span></h1>

                        <form>
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
}




export default withRouter(LandingPage);