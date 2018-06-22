import axios from 'axios';

import {FETCH_NOTIFICATIONS, MARK_NOTIFICATIONS_AS_READ, MARK_ONE_AS_READ} from './types';

export const fetchNotifications = (userId) => {
    const request = axios({
        method: 'get',
        url: process.env.REACT_APP_API_URL_DEV + `notifications/${userId}`,
        headers: {"id": userId}
    });
    return (dispatch) => {
        request.then((data) => {
            dispatch({type: FETCH_NOTIFICATIONS, payload: request})
        });
    };
};

export const markNotificationsAsRead = (user_id)  => {
    const request = axios({
        method: 'get',
        url: process.env.REACT_APP_API_URL_DEV + `notifications/mark_all_read/${user_id}`,
        headers: {"id": user_id},
        data: {user_id}
    });
    console.table(request.data);
    return (dispatch) => {
        request.then((data) => {
            dispatch({type: MARK_NOTIFICATIONS_AS_READ, payload: request})
        });
    };
};


export const markOneAsRead = (user_id, id) => async dispatch => {
    
    const request = await axios({
        method: 'put',
        url: process.env.REACT_APP_API_URL_DEV + `notifications/mark_one/${user_id}`,
        data: { user_id, id }
    });
    dispatch({ type: MARK_ONE_AS_READ, payload: request });

};



