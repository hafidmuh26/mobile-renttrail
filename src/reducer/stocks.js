import {
    SAVE_STOCK_REQUEST, SAVE_STOCK_SUCCESS, SAVE_STOCK_FAILURE,
    DELETE_STOCK_REQUEST, DELETE_STOCK_SUCCESS, DELETE_STOCK_FAILURE,
    FIND_STOCK_REQUEST, FIND_STOCK_SUCCESS, FIND_STOCK_FAILURE,
    FIND_STOCKS_REQUEST, FIND_STOCKS_SUCCESS, FIND_STOCKS_FAILURE,
    SUMMARY_STOCKS_REQUEST, SUMMARY_STOCKS_SUCCESS, SUMMARY_STOCKS_FAILURE
} from '../actions/constants';

const defaultState = { data: null, loading: false, error: null }

export function savedStock(state = defaultState, action) {
    switch (action.type) {
        case SAVE_STOCK_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SAVE_STOCK_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case SAVE_STOCK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function deletedStockById(state = defaultState, action) {
    switch (action.type) {
        case DELETE_STOCK_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case DELETE_STOCK_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case DELETE_STOCK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function stockById(state = defaultState, action) {
    switch (action.type) {
        case FIND_STOCK_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_STOCK_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_STOCK_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function stocks(state = defaultState, action) {
    switch (action.type) {
        case FIND_STOCKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FIND_STOCKS_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case FIND_STOCKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

export function stocksSummary(state = defaultState, action) {
    switch (action.type) {
        case SUMMARY_STOCKS_REQUEST:
            return {
                ...state,
                loading: true,
                error: null
            };
        case SUMMARY_STOCKS_SUCCESS:
            return {
                data: action.data,
                loading: false,
                error: null
            }
        case SUMMARY_STOCKS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.error
            };
        default:
            return state;
    }
}

