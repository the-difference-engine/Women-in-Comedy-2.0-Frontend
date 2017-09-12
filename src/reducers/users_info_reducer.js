import { FETCH_USERS } from '../actions';

const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case FETCH_USERS:
			return [...state, ...action.payload.data];
		default:
			return state;
	}
}