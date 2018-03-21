import { 
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_ERROR,
    NETWORK_ERROR,
    LOCAL_STORAGE_USER_INFO,
} from './actionTypes';

const initialState = {
    status: null,
    user: null,
    client: null,
    logo: null,
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                status: LOGIN_REQUEST,
            };
        case LOGIN_SUCCESS:
            return {
                ...state,
                status: LOGIN_SUCCESS,
                user: action.payload.User,
                client: action.payload.Client,
                logo: action.payload.Logo.ClientsSharingLogo.base64_logo,
            };
        case LOGIN_ERROR:
            return {
                ...state,
                status: LOGIN_ERROR,
            };
        case NETWORK_ERROR:
            return {
                ...state,
                status: NETWORK_ERROR,
            };
        case LOCAL_STORAGE_USER_INFO:
            return {
                ...state,
                // status: LOCAL_STORAGE_USER_INFO,
                user: action.user,
                client: action.client,
                logo: action.logo,
            };

        default:
            return state;
    }
}