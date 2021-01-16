import { LOGIN_SUCCESS, LOGIN_FAILURE, LOGIN_REQUEST } from '../actions/constants';

const defaultState = {
    data: {email: null, password: null },
    loading: false,
    error: null,
};

export function loged(state = defaultState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case LOGIN_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case LOGIN_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
