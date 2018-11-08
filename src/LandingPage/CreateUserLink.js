import React, { Component } from 'react';
import './LandingPage.css';
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';



class CreateUserLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        }

        this.onOpenModal = this.onOpenModal.bind(this);
        this.onCloseModal = this.onCloseModal.bind(this);
    };

    onOpenModal = () => {
        this.setState({ open: true });
        console.log(this.state);
    };

    onCloseModal = () => {
        this.setState({ open: false });
    };

    render() {
        const { open } = this.state;
        return (
            <div id='registerButton'>
                <Link to='#' onClick={this.onOpenModal}><h2>Create New Account</h2></Link>
                {open && <Modal open={open} onClose={this.onCloseModal} center>
                    <h2>Simple centered modal</h2>
                </Modal>}
            </div>
        )
    };
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)(CreateUserLink);