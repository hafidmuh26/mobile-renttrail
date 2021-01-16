import {
    FIND_PARTNER_REQUEST, FIND_PARTNER_SUCCESS, FIND_PARTNER_FAILURE
} from '../actions/constants';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/apiUtils';

function* findById(action) {

    console.log('actionSagasId', action);
    try {
        const data = yield commonAxios.get(`partners/${action.id}`);

        console.log('sagasData', data);
        yield put({
            type: FIND_PARTNER_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_PARTNER_FAILURE,
            error: error

        });
    }
}

export function* watchFindPartnerById() {
    yield takeLatest(FIND_PARTNER_REQUEST, findById);
}
