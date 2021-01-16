import {
    FIND_PARTNER_REQUEST
} from './constants';

export function findById(id) {

    return {
        type: FIND_PARTNER_REQUEST,
        id: id
    };
}
