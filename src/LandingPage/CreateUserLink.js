import React, { Component } from 'react';
import './LandingPage.css';
import Modal from 'react-responsive-modal';
import CreateUserModal from './CreateUserModal';



class CreateUserLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    };

    onOpenModal = (e, err) => {
        this.setState({ open: true });
        console.log(err);
    };

    onCloseModal = () => {
        this.setState({ open: false });    
    }

    render() {
        return (
            <div>
                <a id='registerButton' href='#' onClick={this.onOpenModal}><h2>create new account</h2></a>
                <Modal id='registrationModal' open={this.state.open} onClose={this.onCloseModal} center>
                    <CreateUserModal/>
                </Modal>
            </div>
        )
    };
}

export default CreateUserLink;