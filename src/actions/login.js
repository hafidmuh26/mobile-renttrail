import { LOGIN_REQUEST } from './constants';

export function login(data) {
    return {
        type: LOGIN_REQUEST,
        data: data,
    }
}