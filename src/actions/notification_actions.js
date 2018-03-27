import axios from 'axios';

import {
    CREATE_CONNECTION_REQUEST, FETCH_NOTIFICATIONS, MARK_NOTIFICATION_AS_READ,
    MARK_NOTIFICATIONS_AS_READ
} from './types';

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
    // debugger;
    const request = axios({
        method: 'put',
        url: process.env.REACT_APP_API_URL_DEV + `notifications/mark_all_read/${user_id}`,
        data: {user_id}
    });

    return (dispatch) => {
        request.then((data) => {
            dispatch({type: MARK_NOTIFICATIONS_AS_READ, payload: request})
        });
    };
    // dispatch({ type: MARK_NOTIFICATIONS_AS_READ, payload: request })

};

export const markNotificationAsRead = (notification_id, user_id)  => {
    // debugger;
    const request = axios({
        method: 'put',
        url: process.env.REACT_APP_API_URL_DEV + `notifications/mark_read/${user_id}`,
        data : {notification_id, user_id}
    });
    return (dispatch) => {
        request.then((data) => {
            dispatch({type: MARK_NOTIFICATION_AS_READ, payload: request})
        });
    };
    // dispatch({ type: MARK_NOTIFICATIONS_AS_READ, payload: request })

};



