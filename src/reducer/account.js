import {FIND_ACCOUNT_FAILURE, FIND_ACCOUNT_REQUEST, FIND_ACCOUNT_SUCCESS} from "../actions/constants";

const defaultState = { data: null, loading: false, error: null }

export function account(state = defaultState, action) {
    switch (action.type) {
        case FIND_ACCOUNT_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_ACCOUNT_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_ACCOUNT_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
