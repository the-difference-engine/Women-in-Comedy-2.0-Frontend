import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchEventInfo,
  fetchHostPhoto,
  attendEvent,
  fetchUserInfo,
  unattendEvent,
  eventWallInputChange,
  createPostOnEventWall,
  createInviteRequest
} from '../actions';
import Guests from './components/Guests';
import NewFeeds from './components/NewFeeds';
import EventInfo from './components/EventInfo';
import EventImg from './components/EventImg';
import Navbar from '../common/Navbar';
import Invites from './components/Invites'
import { RightGraySideBar, LeftGraySideBar, PageContent, Feed } from '../common';
import Dialog from 'material-ui/Dialog';
import { FlatButton, Checkbox } from 'material-ui';

class EventsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };

  }
  async componentWillMount() {
    const currentUserId = await sessionStorage.getItem('userId');
    this.props.fetchUserInfo(currentUserId);
    const eventId = this.props.match.params.id;
    await this.props.fetchEventInfo(eventId);
    const hostId = this.props.selectedEvent.info.user_id;
    await this.props.fetchHostPhoto(hostId); 
  }
  onCreatePost() {
    const body = this.props.eventWallPost;
    const eventId = this.props.match.params.id;
    const authorId = sessionStorage.getItem('userId');
    this.props.createPostOnEventWall({ body, eventId, authorId}, this.props.fetchEventInfo);
  }
  onCreateInvite(){
   const senderId = sessionStorage.getItem('userId');
 
  }
  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
  };
  render() {
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />
    ];

    const checkboxes = [
      <Checkbox
        key={1}
        value={1}
        label="DeMarcus Cousins"
      />,
      <Checkbox
        key={2}
        value={2}
        label="Halo Top"
      />,
      <Checkbox
        key={3}
        value={3}
        label="Luna Hassen"
      />
    ];


    return (
      <div id="events-feed-container">
      <div> Test </div>
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

          </LeftGraySideBar>

          <PageContent className="event-feed"><button onClick={this.handleOpen}> Invite </button>
          <Dialog
            title="Invite Users to This Event"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
            {checkboxes}
          </Dialog>
          <h4>Event Feed</h4>
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
              <Invites />
              <Guests
                event={this.props.selectedEvent}
              />
            </RightGraySideBar>
          </div>
      </div>
    );
  }
}
function mapStateToProps({ selectedEvent, userInfo, eventWallPost }) {
  return { selectedEvent, userInfo, eventWallPost };
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
