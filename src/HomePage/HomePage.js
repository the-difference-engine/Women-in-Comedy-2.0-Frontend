import React, { Component } from 'react';
import HeaderComponent from './components/HeaderComponent';

class EventsPage extends Component {
  constructor(props) {
		super(props);
		this.state = {
      event: [
        {
          host_id:1,
      		title: "A Great Event",
      		photo:"my pix",
      		date:"7-16-2016",
      		ticket_link:"www.google.com",
      		about: "mine is bigger"
        }
      ]
    };
	}

	render () {
		return (
			<div id="events-page">
				< HeaderComponent />
			</div>
		);
	}
}

export default EventsPage;
