import React, { Component } from 'react';
import Header from '../EventsPage/components/HeaderComponent';

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
		};
	}

}

export default ProfilePage;