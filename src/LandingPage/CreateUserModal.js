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
            imgURL: null,
            email:''
        };

        this.handleChange = this.handleChange.bind(this);
        this.renderOptionItems = this.renderOptionItems.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    };

    componentDidMount() {
        this.props.fetchMeetingOptions();
    }

    renderOptionItems() {
        return this.props.allMeetingOptions.map(item =>
            (
                <option
                    key={item.id}
                    value={item.id}
                    checked={
                        this.state.user.meet_options &&
                        this.state.user.meet_options.indexOf(item.id) > -1
                    }
                >
                {item.name}
                </option>
            )
        );
    }

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
                        className="img img-thumbnail"
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
                        className="img img-thumbnail"
                        src='../images/holder.jpg'
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
    };

    onSubmit(e) {
        e.preventDefault();
        let user = this.state.user
        let { first_name, last_name, email, password, city, experience, training, video_link, website } = user

        if (this.state.imgURL && this.state.imgURL.startsWith("data:image")) {
            this.storeProfilePicture()
            .then((snapshot) => {
                snapshot.ref.getDownloadURL().then((url) => {
                    let photo = url
                    axios({
                        method: 'post',
                        url: process.env.REACT_APP_API_ENDPOINT + 'users',
                        data: { first_name, last_name, email, password, photo, city, experience, training, video_link, website }
                    }).then(() => {
                        this.setState({ userMade: true });
                    }).catch((err) => {
                        alert(err)
                    });
                })
            });
        } else {
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
                    <br/>
                    <h2>Thank You For Signing Up for Women In Comedy! A confirmation email has
                    been sent.</h2>
                </div>
            );
        } else {
            return (
                <form onSubmit={this.onSubmit}>
                    <h2>Registration Form</h2>
                    <br/>
                    <label name='first_name'>First Name:</label>
                    <br />
                    <input 
                        name="first_name" 
                        placeholder='Jane' 
                        type="text" 
                        required='required'
                        onChange={this.handleChange}
                        value={this.state.user.first_name}
                    />
                    <br/>

                    <br/>
                    <label name='last_name'>Last Name:</label>
                    <br />
                    <input 
                        name="last_name" 
                        placeholder='Doe' 
                        type="text" 
                        required='required'
                        onChange={this.handleChange}
                        value={this.state.user.last_name}
                    />
                    <br/>

                    <br/>
                    <label name='email'>Email Address:</label>
                    <br />
                    <input 
                        name="email" 
                        placeholder='janedoe@email.com' 
                        type="email" 
                        required='required'
                        onChange={this.handleChange}
                        value={this.state.user.email}
                    />
                    <br/>

                    <br/>
                    <label name='password'>Password:</label>
                    <br />
                    <input 
                        name="password" 
                        placeholder='Password' 
                        type="password" 
                        required='required'
                        onChange={this.handleChange}
                        value={this.state.user.password}
                    />
                    <br/>

                    <br/>
                    <label name='city'>City:</label>
                    <br />
                    <input 
                        name="city" 
                        placeholder='City' 
                        type="city" 
                        required='required'
                        onChange={this.handleChange}
                        value={this.state.user.city}
                    />
                    <br/>

                    <br/>
                    <label name='website'>Website:</label>
                    <br />
                    <input 
                        name="website" 
                        placeholder='www.*******.com' 
                        type="text" 
                        required='required'
                        onChange={this.handleChange}
                        value={this.state.user.website}
                    />
                    <br/>

                    <br/>
                    <label name='experience'>Years of Experience:</label>
                    <br />
                    <select 
                        name="experience" 
                        required='required'
                        onChange={(event, index, value) => {
                            const { user } = this.state;
                            user.experience = value;
                            this.setState({ user });
                        }}
                        value={this.state.user.experience}
                    >
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="4-7 years">4-7 years</option>
                        <option value="7-10 years">7-10 years</option>
                        <option value="11+ years">11+ years</option>
                    </select>
                    <br/>

                    <br/>
                    <label name='training'>Years of Training:</label>
                    <br />
                    <select 
                        name="training" 
                        required='required'
                        onChange={(event, index, value) => {
                            const { user } = this.state;
                            user.training = value;
                            this.setState({ user });
                          }}
                        value={this.state.user.training}
                    >
                        <option value="Less than 1 year">Less than 1 year</option>
                        <option value="1-3 years">1-3 years</option>
                        <option value="4-7 years">4-7 years</option>
                        <option value="7-10 years">7-10 years</option>
                        <option value="11+ years">11+ years</option>
                    </select>
                    <br/>

                    <br/>
                    <label name="meet_option_users_attributes">Available to meet for...</label>
                    <br />
                    <select 
                        name="meet_option_users_attributes" 
                        required='required'
                        onChange={(event, index, values) => {
                            const { user } = this.state;
                            user.meet_option_users_attributes = values;
                            this.setState({ user });
                          }}
                        value={this.state.user.meet_option_users_attributes}
                    >
                        {this.renderOptionItems()}
                    </select>
                    <br/>
                    
                    <br/>
                    <label name='uploadphoto'>Upload Photo</label>
                    <br/>
                    <input type="file" id="input" onChange={this.onUpload.bind(this)} />
                    <br />
                    {this.renderImg()}
                    <br/>
                    <button className='btn btn-primary' type="submit">Submit</button>
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
