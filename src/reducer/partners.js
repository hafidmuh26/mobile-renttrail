import {
    FIND_PARTNER_REQUEST, FIND_PARTNER_SUCCESS, FIND_PARTNER_FAILURE
} from '../actions/constants';

const defaultState = { data: null, loading: false, error: null }

export function partnerById(state = defaultState, action) {
    switch (action.type) {
        case FIND_PARTNER_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_PARTNER_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_PARTNER_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}
