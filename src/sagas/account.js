import {FIND_ACCOUNT_FAILURE, FIND_ACCOUNT_REQUEST, FIND_ACCOUNT_SUCCESS} from "../actions/constants";
import {put, takeLatest} from "redux-saga/effects";
import {commonAxios} from "../utils/apiUtils";

function* findAccount() {

    try {
        console.log('sagasAccount');
        const data = yield commonAxios.get('account/me');

        console.log('sagasAccount', data);
        yield put({
            type: FIND_ACCOUNT_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_ACCOUNT_FAILURE,
            error: error
        });
    }
}

export function* watchAccount() {
    yield takeLatest(FIND_ACCOUNT_REQUEST, findAccount);
}
