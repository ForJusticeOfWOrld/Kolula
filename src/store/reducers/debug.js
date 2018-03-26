import { 
    BOOK_GET_BRANCHES_REQUEST,
    BOOK_GET_BRANCHES_SUCCESS,
    BOOK_GET_BRANCHES_ERROR,
    BOOK_SET_RESERVATION_REQUEST,
    BOOK_SET_RESERVATION_SUCCESS,
    BOOK_SET_RESERVATION_ERROR,
    BOOK_SET_RESERVATION_FAILED,
} from '../actionTypes/debug';

const initialState = {
    status: null,
    error: null,
    branchesList: null,
    reservation: null,
    user: {firstname: "Karl", lastname: "Mustermann"}
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case BOOK_GET_BRANCHES_REQUEST:
            return {
                ...state,
                status: BOOK_GET_BRANCHES_REQUEST,
            };
        case BOOK_GET_BRANCHES_SUCCESS:
            return {
                ...state,
                status: BOOK_GET_BRANCHES_SUCCESS,
                branchesList: action.payload,
            };
        case BOOK_GET_BRANCHES_ERROR:
            return {
                ...state,
                status: BOOK_GET_BRANCHES_ERROR,
                error: action.payload,
            };
        case BOOK_SET_RESERVATION_REQUEST:
            return {
                ...state,
                status: BOOK_SET_RESERVATION_REQUEST,
            };
        case BOOK_SET_RESERVATION_SUCCESS:
            return {
                ...state,
                status: BOOK_SET_RESERVATION_SUCCESS,
                reservation: action.payload,
            };
        case BOOK_SET_RESERVATION_FAILED:
            return {
                ...state,
                status: BOOK_SET_RESERVATION_FAILED,
                error: action.payload,
            };
        case BOOK_SET_RESERVATION_ERROR:
            return {
                ...state,
                status: BOOK_SET_RESERVATION_ERROR,
                error: action.payload,
            };


        default:
            return state;
    }
}