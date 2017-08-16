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
					first_name: "Dawn",
					last_name: "French",
					city: "Ent"
				},
				{
					id: 2,
					email: "ants@gmail.com",
					about: "I like ruining picnics",
					first_name: "Chealsea",
					last_name: "Handler",
					city: "Atlantic City"
				},
				{
					id: 3,
					email: "madoka@mahoushojo.com",
					about: "Im a comedien",
					first_name: "Catharine",
					last_name: "Tate",
					city: "Seatle"
				},
				{
					id: 4,
					email: "iveneverbeentobosten@boston.com",
					about: "I live in Boston",
					first_name: "Grace",
					last_name: "Jones",
					city: "Boston"
				},
				{
					id: 5,
					email: "catharine@email.com",
					about: "I like magical girls",
					first_name: "Catharine",
					last_name: "Brianna",
					city: "Springfield"
				},
				{
					id: 6,
					email: "tokyo@mail.com",
					about: "Did you get it?",
					first_name: "Jennifer",
					last_name: "Saunders",
					city: "Tokyo"
				},
				{
					id: 7,
					email: "theone@google.com",
					about: "My heart is full of comedy, even tho it looks liek blood",
					first_name: "Sarah",
					last_name: "Silverman",
					city: "San Fransisco"
				},
				{
					id: 8,
					email: "vera@lol.com",
					about: "Comedy makes me laugh",
					first_name: "Vera",
					last_name: "Smith",
					city: "Chicago"
				},
				{
					id: 9,
					email: "maria@funny.com",
					about: "Comedy is my thing",
					first_name: "Maria",
					last_name: "Totti",
					city: "Canada"
				},
				{
					id: 10,
					email: "Williams@mail.com",
					about: "comedy is the best",
					first_name: "Gretchen",
					last_name: "Williams",
					city: "Sidney"
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