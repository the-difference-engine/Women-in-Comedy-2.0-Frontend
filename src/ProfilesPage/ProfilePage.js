import React, { Component } from 'react';
import Header from '../EventsPage/components/HeaderComponent';
import Profile from './components/Profile';

class ProfilePage extends Component {
	constructor(props) {
		super(props);
		this.state = {
			events: [
				{
					id: 1,
					email: "treesmithson@gmail.com",
					about: "I like comedy",
					first_name: "Tree",
					last_name: "Smithson",
					city: "Ent"
				},
				{
					id: 2,
					email: "ants@gmail.com",
					about: "I like ruining picnics",
					first_name: "Ant",
					last_name: "Sarah",
					city: "Atlantic City"
				},
				{
					id: 3,
					email: "madoka@mahoushojo.com",
					about: "I like magical girls",
					first_name: "Madoka",
					last_name: "Magika",
					city: "Tokyo"
				}],
			events_connections: [
		        {
		        	id: 1,
		      		name:"Dawn French",
		      		photo:"my pix"
		        },
		        {
		        	id: 2,
		        	name:"Chelsea Handler",
		        	photo:"pic"

		        },
		        {
		        	id: 3,
		        	name:"Catharine Tate",
		        	photo:"mypiccc"
		        },
		        {
		        	id: 4,
		        	name:"Grace Jones",
		        	photo:"picture"
		        },
		       	{
		        	id: 5,
		        	name:"Brianna Parkes",
		        	photo:"meepic"
		        },
		        {
		        	id: 6,
		        	name:"Jennifer Saunders",
		        	photo:"mine"
		        },
		        {
		        	id: 7,
		        	name:"Sarah Silverman",
		        	photo:"McPic"
		        },
		        {
		        	id: 8,
		       		name:"Vera Smith",
		        	photo:"mypicturealbum"
		        },
		        {
		        	id: 9,
		        	name:"Maria Totti",
		        	photo:"mypicturebook"
		        },
		        {
		        	id: 10,
		        	name:"Gretchen Williams",
		        	photo:"mypicture"
		        }],
		};
	}

	render () {
		return (
			<div>
				<Header />
				<Profile events={this.state.events} events_connections={this.state.events_connections}/>

			</div>

		);
	}

}


export default ProfilePage;