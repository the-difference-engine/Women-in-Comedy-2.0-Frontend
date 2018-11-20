import React, { Component } from 'react';
import axios from "axios";
import './LandingPage.css';
import firebase from "firebase";
import { connect } from "react-redux";
import { fetchMeetingOptions } from "../actions";



class CreateUserModal extends Component {

    constructor(props) {
        super(props);
        this.state = {
            user: {},
            // imgURL: "https://image.freepik.com/free-icon/female-student-silhouette_318-62252.jpg",
            imgURL: null
        };

        this.handleChange = this.handleChange.bind(this);
        //this.renderMenuItems = this.renderMenuItems.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    componentDidMount() {
        this.props.fetchMeetingOptions();
    }

    /*renderMenuItems() {
        return this.props.allMeetingOptions.map(item =>
            (
                <MenuItem
                    key={item.id}
                    primaryText={item.name}
                    value={item.id}
                    insetChildren={true}
                    checked={
                        this.state.user.meet_options &&
                        this.state.user.meet_options.indexOf(item.id) > -1
                    }
                />
            )
        );
    }*/

    selectionRenderer(values) {
        switch (values.length) {
            case 0:
                return "";
            case 1:
                return this.props.allMeetingOptions[values[0] - 1].name;
            default:
                return `${values.length} options selected`;
        }
    };

    handleChange(event) {
        const { user } = this.state;
        user[event.target.name] = event.target.value;
        this.setState({ user });
    }

    onClick() {
        const input = document.getElementById("input");
        input.click();
    }

    renderImg() {
        if (this.state.imgURL) {
            return (
                <div>
                    <img
                        id="img"
                        src={this.state.imgURL}
                        alt=""
                        width="250"
                        height="250"
                    />
                </div>
            );
        } else {
            return (
                <div>
                    <img
                        id="img"
                        src='{holder}'
                        alt=""
                        width="250"
                        height="250"
                    />
                </div>
            );
        }
    }

    onUpload(event) {
        const file = event.target.files;
        const fileReader = new FileReader();

        fileReader.readAsDataURL(file[0]);
        fileReader.onload = () => {
            this.setState({ imgURL: fileReader.result, img: file[0] });
        };
    }

    storeProfilePicture() {
        const ext = this.state.img.name.slice(this.state.img.name.lastIndexOf('.'));
        return firebase.storage()
            .ref(`/users/${this.state.user.first_name}${this.state.user.last_name}${ext}`)
            .put(this.state.img)
            .then(snapshot => {
                this.state.user.photo = snapshot.downloadURL;
            });
    };

    onSubmit(e) {
        e.preventDefault();
        let user = this.state.user
        let { first_name, last_name, email, password, city, experience, training, video_link, website } = user

        if (this.state.imgURL.startsWith("data:image")) {
            this.storeProfilePicture()
                .then(() => {
                    axios({
                        method: 'post',
                        url: process.env.REACT_APP_API_ENDPOINT + 'users',
                        data: { first_name, last_name, email, password, city, experience, training, video_link, website }
                    })
                }).then(payload => {
                    this.setState({ userMade: true });
                }).catch(err => {
                    alert(err)
                });
        }
        else {
            axios({
                method: 'post',
                url: process.env.REACT_APP_API_ENDPOINT + 'users',
                data: { first_name, last_name, email, password, city, experience, training, video_link, website }
            }).then(payload => {
                this.setState({ userMade: true });
            }).catch(err => {
                alert(err)
            });
        }
    }

    render() {
        const { handleSubmit } = this.props;
        if (this.state.userMade) {
            return (
                <div>
                    Thank You For Signing Up for Women In Comedy! A confirmation email has
                    been sent.
                </div>
            );
        } else {
            return (
                <form onSubmit={this.onSubmit}>
                    <label name='firstname'>First Name:</label>
                    <br />
                    <input 
                        name="first_name" 
                        placeholder='First Name' 
                        type="text" 
                        required='required'
                        onChange={this.handleChange}
                        value={this.state.user.first_name}
                    />

                </form>
            );

        }
    }
}


function mapStateToProps(state) {
    const { allMeetingOptions } = state;
    return { allMeetingOptions };
}

export default connect(mapStateToProps, { fetchMeetingOptions })(CreateUserModal);