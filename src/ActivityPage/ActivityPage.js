import React, { Component } from 'react';
import Header from '../EventsPage/components/HeaderComponent';
import Bio from './components/Bio';
import Users from './components/Users';
import YourActivity from './ActivityPage';
import feedSearch from './ActivityPage';

class ActivityPage extends Component {
  constructor(props) {
		super(props);
		this.state = {
	    	events: [
		        {
		        	id:1,
		      		name:"Dawn French",
		      		photo:"my pix"
		        },
		        {
		        	id:2,
		        	name:"Chelsea Handler",
		        	photo:"pic"

		        },
		        {
		        	id:3,
		        	name:"Catharine Tate",
		        	photo:"mypiccc"
		        },
		        {
		        	id:4,
		        	name:"Grace Jones",
		        	photo:"picture"
		        },
		       	{
		       		id:5,
		        	name:"Brianna Parkes",
		        	photo:"meepic"
		        },
		        {
		        	id:6,
		        	name:"Jennifer Saunders",
		        	photo:"mine"
		        },
		        {
		        	id:7,
		        	name:"Sarah Silverman",
		        	photo:"McPic"
		        },
		        {
		        	id:8,
		       		name:"Vera Smith",
		        	photo:"mypicturealbum"
		        },
		        {
		        	id:9,
		        	name:"Maria Totti",
		        	photo:"mypicturebook"
		        },
		        {
		        	id:10,
		        	name:"Gretchen Williams",
		        	photo:"mypicture"
		        }],
	    };
	}

	render () {
		return (
			<div>
				< Header />
				< Bio />
				< Users events={this.state.events} />

			</div>
		);
	}
}

export default ActivityPage;
