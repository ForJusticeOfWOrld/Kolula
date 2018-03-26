import { AsyncStorage } from 'react-native';

import { 
    BOOK_GET_BRANCHES_REQUEST,
    BOOK_GET_BRANCHES_SUCCESS,
    BOOK_GET_BRANCHES_ERROR,
    BOOK_SET_RESERVATION_REQUEST,
    BOOK_SET_RESERVATION_SUCCESS,
    BOOK_SET_RESERVATION_ERROR,
    BOOK_SET_RESERVATION_FAILED,
} from '../actionTypes/debug';

/*
import {
    getBranches,
    setReservation,
} from '../../utils/api';
*/

export function getStationBranches(clientId, clientApiKey, showInactive, forceTestServer, debug) {
    return async (dispatch) => {
        dispatch({ type: BOOK_GET_BRANCHES_REQUEST });
        try {
            let branchesList = "await getBranches(clientId, clientApiKey, showInactive, forceTestServer, debug)";
            if (branchesList.result.hasOwnProperty('branches')) {
                dispatch({ type: BOOK_GET_BRANCHES_SUCCESS, payload: branchesList.result.branches });
            } else {
                dispatch({ type: BOOK_GET_BRANCHES_ERROR, payload: {error:{message : 'unkown'}} });
            }
        } catch (error) {
            dispatch({ type: BOOK_GET_BRANCHES_ERROR, payload: error });
        }
    }
}


export function reservateBike(clientId, clientApiKey, bikeId, userId,  switchTariff, forceTestServer, debug) {
    return async (dispatch) => {
        dispatch({ type: BOOK_SET_RESERVATION_REQUEST });
        try {
            let reservation = "await setReservation(clientId, clientApiKey, bikeId, userId, switchTariff, forceTestServer, debug)";
            if (reservation.result.Reservation) {
                dispatch({ type: BOOK_SET_RESERVATION_SUCCESS, payload: reservation.result.Reservation });
            } else {
                dispatch({ type: BOOK_SET_RESERVATION_FAILED, payload: reservation.result.error});
            }
        } catch (error) {
            dispatch({ type: BOOK_SET_RESERVATION_ERROR, payload: error });
        }
    }
}
