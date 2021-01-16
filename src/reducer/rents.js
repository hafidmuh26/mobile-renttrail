import {
    SAVE_RENT_REQUEST,
    SAVE_RENT_SUCCESS,
    SAVE_RENT_FAILURE,
    FIND_RENTS_REQUEST,
    FIND_RENTS_SUCCESS,
    FIND_RENTS_FAILURE,
    FIND_RENT_REQUEST, FIND_RENT_SUCCESS, FIND_RENT_FAILURE
} from '../actions/constants';

const defaultState = {data: null, loading: false, error: null}

export function savedRent(state = defaultState, action) {
    switch (action.type) {
        case SAVE_RENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SAVE_RENT_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case SAVE_RENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function rents(state = defaultState, action) {
    switch (action.type) {
        case FIND_RENTS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_RENTS_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_RENTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function rentById(state = defaultState, action) {
    switch (action.type) {
        case FIND_RENT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_RENT_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_RENT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

