import {
    SAVE_TRANSACTION_REQUEST,
    DELETE_TRANSACTION_REQUEST,
    FIND_TRANSACTION_REQUEST,
    FIND_TRANSACTIONS_REQUEST,
    SUMMARY_TRANSACTIONS_REQUEST,
} from './constants';

export function save(data) {
    return {
        type: SAVE_TRANSACTION_REQUEST,
        data: data
    };
}

export function deleteById(id) {
    return {
        type: DELETE_TRANSACTION_REQUEST,
        id: id
    };
}

export function findById(id) {

    return {
        type: FIND_TRANSACTION_REQUEST,
        id: id
    };
}

export function findAll(params) {
    return {
        type: FIND_TRANSACTIONS_REQUEST,
        params: params
    };
}

export function findSummary(params) {
    return {
        type: SUMMARY_TRANSACTIONS_REQUEST,
        params: params
    };
}

