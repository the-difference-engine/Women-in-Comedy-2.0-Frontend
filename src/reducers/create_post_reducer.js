import { CREATE_POST } from '../ProfilesPage/components/profile';

const INITIAL_STATE = {}

export default (state = INITIAL_STATE, action) => {
	switch(action.type) {
		case CREATE_POST:
			console.log(action.payload);
			return { ...state, status: action.payload.data.status };
		default:
			return state;
	}
}