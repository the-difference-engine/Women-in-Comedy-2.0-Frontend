import axios from 'axios';

import {FETCH_NOTIFICATIONS} from './types';

export const fetchNotifications = (userId) => {
    const request = axios({
        method: 'get',
        url: process.env.REACT_APP_API_URL_DEV + `/notifications/${userId}`,
        headers: {"id": userId}
    });
    return (dispatch) => {
        request.then((data) => {
            dispatch({type: FETCH_NOTIFICATIONS, payload: request})
        });
    };
};

export const markNotificationsAsRead = (userId, sender_id, callback, callback2) => async dispatch => {

    const request = await axios({
        method: 'post',
        url: process.env.REACT_APP_API_URL_DEV + `/notifications/${userId}`,
        // data: { sender_id, receiver_id: userId }
    });
    await callback(userId);
    await callback2(userId);
};

