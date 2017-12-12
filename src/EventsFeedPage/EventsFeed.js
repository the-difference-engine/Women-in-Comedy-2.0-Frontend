import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchEventInfo,
  fetchHostPhoto,
  attendEvent,
  fetchUserInfo,
  unattendEvent,
  eventWallInputChange,
  createPostOnEventWall
} from '../actions';
import Guests from './components/Guests';
import NewFeeds from './components/NewFeeds';
import EventInfo from './components/EventInfo';
import EventImg from './components/EventImg';
import Navbar from '../common/Navbar';
import UpdateEvent from './components/UpdateEvent';
import { RightGraySideBar, LeftGraySideBar, PageContent, Feed } from '../common';

class EventsFeed extends Component {
  constructor(props) {
    super(props);
  }
  async componentDidMount() {
    const eventId = this.props.match.params.id;
    await this.props.fetchEventInfo(eventId);
    const hostId = await this.props.selectedEvent.info.user_id;
    this.props.fetchUserInfo(sessionStorage.getItem('userId'));
    await this.props.fetchHostPhoto(hostId); 
    // const photoUrl = await this.props.selectedEvent.hostPhoto;
  }
  onCreatePost() {
    const body = this.props.eventWallPost;
    const eventId = this.props.match.params.id;
    const authorId = sessionStorage.getItem('userId');
    this.props.createPostOnEventWall({ body, eventId, authorId}, this.props.fetchEventInfo);
  }
  render() {
    return (
      <div id="events-feed-container">
        <div>
          <Navbar history={this.props.history} />
        </div>
        <div id="pic-wrap">   
          <EventImg event={this.props.selectedEvent} />  
        </div>  

          <LeftGraySideBar className="event-info-bar">
            <EventInfo
              event={this.props.selectedEvent}
              attendEvent={this.props.attendEvent}
              userInfo={this.props.userInfo}
              eventId={this.props.match.params.id}
              fetchEventInfo={this.props.fetchEventInfo}
              unattendEvent={this.props.unattendEvent}>
            </EventInfo>
          <UpdateEvent id="edit_btn" history={this.props.history} eventId={this.props.match.params.id}/>

          </LeftGraySideBar>

          <PageContent pageTitle={"Event Feed"} className="event-feed"><h4>Event Feed</h4>
            <div className="feed-post-bar">
              <div className="wrap">
                <div className="search">
                  <input
                    type="text"
                    className="searchTerm"
                    placeholder="What's New?"
                    onChange={event => this.props.eventWallInputChange(event.target.value)}
                    value={this.props.eventWallPost}
                  />
                  <div className="post-button"><button className="btn btn-default" onClick={this.onCreatePost.bind(this)}>POST</button></div>
                </div>
              </div>
            </div>

            <NewFeeds event={this.props.selectedEvent} className="event-comment"/>
            
          </PageContent>

        
          <div id="container">
            <RightGraySideBar>
              <Guests
                event={this.props.selectedEvent}
              />
            </RightGraySideBar>
          </div>
      </div>
    );
  }
}
function mapStateToProps({ selectedEvent, hostInfo, userInfo, eventWallPost }) {
  console.log(selectedEvent);
  return { selectedEvent, hostInfo, userInfo, eventWallPost };
}
export default connect(mapStateToProps,
  {
    fetchEventInfo,
    attendEvent,
    fetchUserInfo,
    fetchHostPhoto,
    unattendEvent,
    eventWallInputChange,
    createPostOnEventWall
  }
)(EventsFeed);
