<<<<<<< HEAD
import React, { Component } from "react";
import { Dialog, TextField } from "material-ui";
import { connect } from "react-redux";
import { mailUsers } from "../../actions/index";

class EmailModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleOpen = this.handleOpen.bind(this);
    this.handleClose = this.handleClose.bind(this);
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div>
        <br />
        <button onClick={this.handleOpen}>Email Users</button>
        <Dialog
          autoScrollBodyContent={true}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          <textarea />
          <br />
          <button onClick={this.props.mailUsers}>Submit</button>
        </Dialog>
      </div>
    );
  }
}

export default connect(
  null,
  { mailUsers }
)(EmailModal);
=======
import React, {Component} from "react";
import {Dialog, TextField} from "material-ui";

class EmailModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
    };

    handleOpen() {
        this.setState({open: true});
    };

    handleClose() {
        this.setState({open: false});
    };

    render() {
        return(
            <div>
                <br/>
                <button onClick={this.handleOpen}>Email Users</button>
                <Dialog
                    autoScrollBodyContent={true}
                    modal={false}
                    open={this.state.open}
                    onRequestClose={this.handleClose}
                >
                <textarea></textarea>
                <br/>
                <button>Submit</button>
                </Dialog>
            </div>
        );
    }
}

export default EmailModal;
>>>>>>> 2a4044dde8b420cdf1df264bf55cd42008b77a9d
