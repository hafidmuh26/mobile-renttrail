import {OAUTH_REQUEST} from './constants';

export function oauth(data) {
    return {
        type: OAUTH_REQUEST,
        data: data,
    }
}