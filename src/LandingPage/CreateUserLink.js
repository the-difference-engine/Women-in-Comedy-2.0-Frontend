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
            open: false
        }
    }; 
    
    onOpenModal = () => {
        this.setState({ open: true });
    };
     
    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        return (
            <div>
                <h2><Link id="registerBtn" to='#' onClick={this.onOpenModal}>Create New Account</Link></h2>
            </div>
        )
    };
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)(CreateUserLink);