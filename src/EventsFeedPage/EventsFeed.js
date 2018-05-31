import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchAllUsers,
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
import { FlatButton, Checkbox, RaisedButton, Snackbar } from 'material-ui';

//Test
class EventsFeed extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      invited: false,
    };
    //this.props.createInviteRequest = this.createInviteRequest.bind(this);
  }
  componentDidMount() {
  //  const {fetchAllUsers} = this.props;
    //fetchAllUsers();
  }

  async componentWillMount() {
    const {fetchAllUsers} = this.props;
    fetchAllUsers();
    const currentUserId = await sessionStorage.getItem('userId');
    //const users = await 
    //this.props.fetchAllUsers();
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
  onCreateInvite(receiverId){
   const senderId = sessionStorage.getItem('userId');
   const eventId = this.props.match.params.id;
   this.props.createInviteRequest(senderId, receiverId, eventId);
   this.setState({invited: true});
  }

  handleOpen(){
    this.setState({open: true});
  }
  handleClose(){
    this.setState({open: false});
  }

  renderInviteButton(){
    if (this.props.selectedEvent != null) {
      if (this.props.selectedEvent.info.user_id === this.props.userInfo.id) {
        return <div><RaisedButton label="Invite" onClick={this.handleOpen.bind(this)} /></div>
      }
    }
  }


  render() {
    const actions = [
      <FlatButton
        label="Close"
        primary={true}
        onClick={this.handleClose.bind(this)}
      />
    ];

    const inviteButtons = [];
    const invite = []; //Opens the invite modal
    
    if (this.props.selectedEvent != null) {
      this.props.users.map(user => {
        if (this.props.selectedEvent.info.user_id !== user.value) {
          inviteButtons.push(
          <div>
            <label>{user.text}</label>
            
            <RaisedButton label="Invite" onClick={this.onCreateInvite.bind(this, user.value)} />
            <Snackbar
              open={this.state.invited}
              message="Invite sent!" 
              autoHideDuration={4000}
              onRequestClose={this.handleRequestClose}
            />
          </div>
          );
        }
      });

      if (this.props.selectedEvent.info.user_id === this.props.userInfo.id) {
        invite.push(<div><RaisedButton label="Invite" onClick={this.handleOpen.bind(this)} /></div>);
      }
    }
  


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

          <PageContent className="event-feed">
           {invite}
          <Dialog
            title="Invite Users to This Event"
            actions={actions}
            modal={false}
            open={this.state.open}
            onRequestClose={this.handleClose}
            autoScrollBodyContent={true}
          >
            {inviteButtons}
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
              <Guests
                event={this.props.selectedEvent}
              />
            </RightGraySideBar>
          </div>
      </div>
    );
  }
}
function mapStateToProps({ selectedEvent, userInfo, eventWallPost, allUsers }) {
  const {filterUserList} = allUsers;
  const users = filterUserList.map(user => {
    return {text: `${user.firstName} ${user.lastName}`, value: user.id}
  });

  return { selectedEvent, userInfo, eventWallPost, users };
}

export default connect(mapStateToProps,
  {
    fetchAllUsers,
    fetchEventInfo,
    attendEvent,
    fetchUserInfo,
    fetchHostPhoto,
    unattendEvent,
    eventWallInputChange,
    createPostOnEventWall,
    createInviteRequest
  }
)(EventsFeed);
