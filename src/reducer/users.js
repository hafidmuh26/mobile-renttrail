import {
    SAVE_USER_REQUEST,
    SAVE_USER_SUCCESS,
    SAVE_USER_FAILURE,
    FIND_USER_REQUEST,
    FIND_USER_SUCCESS,
    FIND_USER_FAILURE,
    FIND_USERID_REQUEST,
    FIND_USERID_SUCCESS,
    FIND_USERID_FAILURE,
} from "../actions/constants";

const defaultState = { data: null, loading: false, error: null }

export function savedUsers(state = defaultState, action) {
    switch (action.type) {
        case SAVE_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SAVE_USER_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case SAVE_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function user(state = defaultState, action) {
    switch (action.type) {
        case FIND_USER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_USER_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_USER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function userById(state = defaultState, action) {
    switch (action.type) {
        case FIND_USERID_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_USERID_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_USERID_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
