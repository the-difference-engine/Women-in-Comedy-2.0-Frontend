import React, { Component } from 'react';
import './LandingPage.css';
import axios from "axios";
import { setUserLoggedIn } from "../actions";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import CreateUserModal from './CreateUserModal';



class CreateUserLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isHidden: true
        };
        //this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }; 
    
    handleOpen() {
        this.setState({ isHidden: false });
    };
    
    handleClose() {
        this.setState({ isHidden: true });
    };



    render() {
        return (
            <div>
                <h2><Link id="registerBtn" to='#' onClick={this.handleOpen.bind(this)}>Create New Account</Link></h2>
                {!this.state.isHidden && <CreateUserModal/>}
            </div>
        )
    };
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)(CreateUserLink);