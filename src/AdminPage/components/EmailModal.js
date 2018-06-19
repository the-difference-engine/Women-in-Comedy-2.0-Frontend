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