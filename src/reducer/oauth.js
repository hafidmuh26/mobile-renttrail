import {
    OAUTH_REQUEST,
    OAUTH_SUCCESS,
    OAUTH_FAILURE
} from '../actions/constants';

const defaultState = {
    data: { id: null, name: null, email: null, picture: null},
    loading: false,
    error: null,
};

export function oauthed(state = defaultState, action) {
    switch (action.type) {
        case OAUTH_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case OAUTH_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            };
        case OAUTH_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}