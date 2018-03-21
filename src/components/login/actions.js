import { AsyncStorage } from 'react-native';

import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    NETWORK_ERROR,
    LOCAL_STORAGE_USER_INFO,
} from './actionTypes';

import { getUser } from '../../utils/api';

export function login(username, password, testServer, debug) {
    return async (dispatch) => {
        try {
            dispatch({ type: LOGIN_REQUEST });
            const userdata = await getUser(username, password, testServer, debug);

            if (userdata.result.hasOwnProperty('User') && userdata.result.hasOwnProperty('Client')) {
                await AsyncStorage.setItem('ebike_user', JSON.stringify(userdata.result.User));
                await AsyncStorage.setItem('ebike_client', JSON.stringify(userdata.result.Client));
                await AsyncStorage.setItem('ebike_client_logo', userdata.result.Logo.ClientsSharingLogo.base64_logo);

                dispatch({ type: LOGIN_SUCCESS, payload: userdata.result });
            } else {
                dispatch({ type: LOGIN_ERROR, payload: 'error' });
                console.log('(login (checkLogin)) no user found');
            }
        } catch (error) {
            dispatch({ type: NETWORK_ERROR, payload: 'error' });
            console.log('(login (checkLogin)) login error: ' + error.message);
        }
    }
}


export function setLocalUserInfo(user, client, logo) {

    return async (dispatch) => {
        dispatch({ type: LOCAL_STORAGE_USER_INFO, user, client, logo });
    }
}

