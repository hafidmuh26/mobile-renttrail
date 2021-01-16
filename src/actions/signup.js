import { SIGNUP_REQUEST } from './constants';

export function signup(data) {
    return {
        type: SIGNUP_REQUEST,
        data: data,
    }
};