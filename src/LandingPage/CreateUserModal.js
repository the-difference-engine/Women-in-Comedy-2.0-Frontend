import React, { Component } from 'react';
import './LandingPage.css';
import axios from "axios";
import { connect } from "react-redux";
import Modal from 'react-responsive-modal';



class CreateUserModal extends Component {

    constructor(props) {
        super(props);
        
    };

    render() {
        return (
            <form>
                <label name='firstname'>First Name:</label>
                <input name="firstname" placeholder='First Name' type="text"/>

            </form>
        );
    }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)(CreateUserModal);