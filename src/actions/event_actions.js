import { CREATE_EVENT } from './types';
import axios from 'axios'


export function createEvent(data){
  console.log('createEvent', data);
  return async (dispatch) => {
    try {
      await axios.post('http://localhost:9000/api/v1/events', { 
        user_id: data.userId,
        title: data.title,
        photo: data.photo,
        date: data.date,
        time: data.time,
        ticket_link: data.ticketLink,
        location: data.location,
        about: data.about
      })
    } catch (e) {
        console.log(e)
      }
  }
};
