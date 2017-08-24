import { CREATE_EVENT } from './types';
import axios from 'axios'

export const createEvent = (data) => {
  console.log('createEvent', data);
  return {
    type: CREATE_EVENT,
    payload: data
  };
};
