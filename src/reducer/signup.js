import { SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST } from '../actions/constants';

const defaultState = {
    data: { name: null, email: null, password: null },
    loading: false,
    error: null,
};

export function signup(state = defaultState, action) {
    switch (action.type) {
        case SIGNUP_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SIGNUP_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case SIGNUP_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}