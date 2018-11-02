import React, { Component } from 'react';
import './LandingPage.css';
import axios from "axios";
import { connect } from "react-redux";



class CreateUserModal extends Component {

    constructor(props) {
        super(props);
        
    }; 



    render() {
        return (
            <div className="modal" tabIndex="-1" role="dialog">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title">Create A New Account</h1>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <p>Modal body text goes here.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary">Save changes</button>
                            <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                        </div>
                    </div>
                </div>
            </div>

        )
    };
}


const mapStateToProps = state => state;

export default connect(mapStateToProps)(CreateUserModal);