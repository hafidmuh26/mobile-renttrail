import {FIND_ACCOUNT_REQUEST} from "./constants";

export function findAccount() {
    return {
        type: FIND_ACCOUNT_REQUEST,
    }
}
