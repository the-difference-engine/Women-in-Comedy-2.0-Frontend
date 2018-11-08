import React, { Component } from 'react';
import './LandingPage.css';
import axios from "axios";
import { connect } from "react-redux";
import Modal from 'react-responsive-modal';



class CreateUserModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }
    };





    render() {
        const { open } = this.state;
        return (
            <div>
                <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Simple centered modal</h2>
                </Modal>
            </div>
        );
    }
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)(CreateUserModal);