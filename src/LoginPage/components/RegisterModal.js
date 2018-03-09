import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import axios from "axios";
import RegisterFrom from "../components/RegisterForm";
import Dialog from "material-ui/Dialog";
import RegisterForm from "./RegisterForm";
import { connect } from "react-redux";
import RaisedButton from "material-ui/RaisedButton";
import { RadioButton, RadioButtonGroup } from "material-ui/RadioButton";

class RegisterModal extends Component {
  constructor(props) {
    super(props);
  }
  //this.state

  state = {
    open: false
  };

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div>
        <div>
          {" "}
          <h1> test for rendering </h1>{" "}
        </div>
        <RaisedButton label="Scrollable Dialog" onClick={this.handleOpen} />
        <Dialog
          autoScrollBodyContent={true}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <RegisterForm> </RegisterForm>

          <button label="clickMe!"> </button>
        </Dialog>
      </div>
    );
  }
}
const mapStateToProps = state => state;
export default RegisterModal;
