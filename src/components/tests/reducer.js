import {
    GET_TEST_DATA_REQUEST,
    GET_TEST_DATA_SUCCESS,
    GET_TEST_DATA_FAILED,
    GET_TEST_DATA_ERROR,
} from './actionTypes';

const initialState = {
    status: null,
    error: null,
    reservationChecked: false,
    activeReservation: null,
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case GET_TEST_DATA_REQUEST:
            return {
                ...state,
                status: GET_TEST_DATA_REQUEST,
            };
        case GET_TEST_DATA_SUCCESS:
            return {
                ...state,
                status: GET_TEST_DATA_SUCCESS,
                activeReservation: action.payload,
                reservationChecked: true,
            };
        case GET_TEST_DATA_FAILED:
            return {
                ...state,
                status: GET_TEST_DATA_FAILED,
                reservationChecked: true,
                error: action.payload,
            };
        
        case GET_TEST_DATA_ERROR:
            return {
                ...state,
                status: GET_TEST_DATA_ERROR,
                reservationChecked: false,
                error: action.payload,
            };
            
        default:
            return state;
    }
}