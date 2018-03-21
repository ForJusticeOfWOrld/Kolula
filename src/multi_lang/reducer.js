import { 
    MULTI_LANG_LOADING,
    MULTI_LANG_LOAD_SUCCESS,
    MULTI_LANG_LOAD_ERROR,
} from './actionTypes';

const initialState = {
    status: '',
};

export default function (state = initialState, action = {}) {
    switch (action.type) {
        case MULTI_LANG_LOADING:
            return {
                ...state,
                status: MULTI_LANG_LOADING,
            };
        case MULTI_LANG_LOAD_SUCCESS:
            return {
                ...state,
                ...action.payload,
                status: MULTI_LANG_LOAD_SUCCESS,
            };
        case MULTI_LANG_LOAD_ERROR:
            return {
                ...state,
                status: MULTI_LANG_LOAD_ERROR,
            };
        default:
            return state;
    }
}