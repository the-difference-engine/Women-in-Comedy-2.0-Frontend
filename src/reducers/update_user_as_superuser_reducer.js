import { UPDATE_USER_AS_SUPERUSER } from '../actions/types';

const INITIAL_STATE = [];
export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case UPDATE_USER_AS_SUPERUSER:
			return action.payload;
		default:
			return state;
	}
};