import { AsyncStorage } from 'react-native';

import {
    GET_TEST_DATA_REQUEST,
    GET_TEST_DATA_SUCCESS,
    GET_TEST_DATA_FAILED,
    GET_TEST_DATA_ERROR,
} from './actionTypes';

//import { get_active_reservation } from '../../utils/api';


export function getActiveReservation(clientId, clientApiKey, userId, testServer, debug) {
    return async (dispatch) => {
        try {
            dispatch({ type: GET_ACTIVE_RESERVATION_REQUEST });
            const reservation = await get_active_reservation(clientId, clientApiKey, userId, testServer, debug);
            console.log("Active Reservation : ", reservation);
            const activeReservation = reservation.result.active_reservation;
            if (activeReservation) {
                if (activeReservation.Branches !== null && activeReservation.Ressource !== null && activeReservation.Reservation !== null) {
                    console.log('(home (loadReservation)) succesfully booked');
                    let activeReservationObj = new Object();
                    activeReservationObj.station = activeReservation.Branches;
                    activeReservationObj.bike = activeReservation.Ressource;
                    // activeReservationObj.user = user;
                    // activeReservationObj.client = client;
                    activeReservationObj.reservation = activeReservation.Reservation;
                    await AsyncStorage.setItem('ebike_reservation', JSON.stringify(activeReservationObj));
                    console.log('(home (loadReservation)) activeReservationObj wrote to AsyncStorage:');
                    console.log(activeReservationObj);
                    dispatch({ type: GET_ACTIVE_RESERVATION_SUCCESS, payload: activeReservationObj });
                    return;
                } else {
                    dispatch({ type: GET_ACTIVE_RESERVATION_SUCCESS, payload: null });
                }
            } else {
                console.log("Active Reservation Failed: ", reservation.result);
                dispatch({ type: GET_ACTIVE_RESERVATION_FAILED, payload: reservation.result.error });
            }
        } catch (error) {
            dispatch({ type: GET_ACTIVE_RESERVATION_ERROR, payload: error });
            console.log('(network error: ' + error.message);
        }
    }
}


export function setActiveReservation(reservation) {
    return async (dispatch) => {
        dispatch({ type: GET_ACTIVE_RESERVATION_SUCCESS, payload: reservation });
    }
}


