import {
    SAVE_RENT_REQUEST, FIND_RENTS_REQUEST, FIND_RENT_REQUEST
} from "./constants";

export function save(data) {
    return {
        type: SAVE_RENT_REQUEST,
        data: data
    };
}

export function findById(id) {

    return {
        type: FIND_RENT_REQUEST,
        id: id
    };
}

export function findAll(params) {
    return {
        type: FIND_RENTS_REQUEST,
        params: params
    };
}
