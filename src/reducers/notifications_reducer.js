import {FETCH_NOTIFICATIONS, MARK_NOTIFICATIONS_AS_READ, MARK_NOTIFICATION_AS_READ} from '../actions/types';

export default (state = null, action) => {
    switch (action.type) {
        case FETCH_NOTIFICATIONS:
            return action.payload.data;
        case MARK_NOTIFICATIONS_AS_READ:
            return action.payload.data;
            case MARK_NOTIFICATION_AS_READ:
            return action.payload.data;
        default:
            return state;
    }
};
