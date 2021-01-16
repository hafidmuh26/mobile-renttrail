import { SIGNUP_SUCCESS, SIGNUP_FAILURE, SIGNUP_REQUEST } from '../actions/constants';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/apiUtils';


function* signup(action) {
    const { name,email, password } = action.data;

    try {
        const data = yield commonAxios.post('auth/signup', {
            name, email, password
        });
        yield put({
            type: SIGNUP_SUCCESS,
            data: data,
        });
    } catch (error) {
        yield put({
            type: SIGNUP_FAILURE,
            error: error
        });
    }
}

export function* watchSignup() {
    yield takeLatest(SIGNUP_REQUEST, signup);
}

