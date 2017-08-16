import { CREATE_SESSION } from '../actions';

const INITIAL_STATE = { confirmed_at: null };

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case CREATE_SESSION:
      console.log(action.payload.data);
      const { confirmed_at } = action.payload.data;
       return { ...state, confirmed_at };
    default:
      return INITIAL_STATE;
  }
};
