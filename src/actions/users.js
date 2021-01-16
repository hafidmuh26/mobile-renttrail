import {
    SAVE_USER_REQUEST,
    FIND_USER_REQUEST,
    FIND_USERID_REQUEST,
} from "./constants";

export function save(data) {
    return {
        type: SAVE_USER_REQUEST,
        data: data,
    };
}

export function findUser(id) {
    return {
        type: FIND_USER_REQUEST,
        id: id,
    };
}

export function findUserId(id) {
    return {
        type: FIND_USERID_REQUEST,
        id: id,
    };
}

