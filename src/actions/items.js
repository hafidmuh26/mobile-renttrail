import {
    FIND_ITEM_REQUEST,
    FIND_ITEMS_REQUEST,
} from './constants';

export function findById(id) {

    return {
        type: FIND_ITEM_REQUEST,
        id: id
    };
}

export function findAll(params) {
    return {
        type: FIND_ITEMS_REQUEST,
        params: params
    };
}

