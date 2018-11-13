import React, { Component } from 'react';
import './LandingPage.css';
//import { connect } from "react-redux";
//import { Link } from 'react-router-dom';
import Modal from 'react-responsive-modal';



class CreateUserLink extends Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    };

    // state = {
    //     open: false,
    // };

    onOpenModal = (e, err) => {
        this.setState({ open: true });
        console.log(err);
    };

    onCloseModal = () => {
        this.setState({ open: false });    
    }

    render() {
        return (
            <div id='registerButton'>
                <a href='#' onClick={this.onOpenModal}><h2>Create New Account</h2></a>
                <Modal open={this.state.open} onClose={this.onCloseModal} center>
                    <h2>Simple centered modal</h2>
                </Modal>
            </div>
        )
    };
}


//const mapStateToProps = state => state;

//export default connect(mapStateToProps)(CreateUserLink);
export default CreateUserLink;