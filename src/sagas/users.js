import {
    SAVE_USER_REQUEST,
    SAVE_USER_SUCCESS,
    SAVE_USER_FAILURE,
    FIND_USER_REQUEST,
    FIND_USER_SUCCESS,
    FIND_USER_FAILURE,
    FIND_USERID_REQUEST,
    FIND_USERID_SUCCESS,
    FIND_USERID_FAILURE,
} from "../actions/constants";
import {put, takeLatest} from 'redux-saga/effects';
import {commonAxios} from '../utils/apiUtils';
import {AsyncStorage} from 'react-native';

function* save(action) {
    const {id, name, nik, noHp, address, gender, picture, account} = action.data;

    try {
        const data = yield (id ?
            commonAxios.put(`users/${id}`, {id, name, nik, noHp, address, gender, picture, account}) :
            commonAxios.post('users', {name, nik, noHp, address, gender, picture, account}));

        yield put({
            type: SAVE_USER_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: SAVE_USER_FAILURE,
            error: error

        });
    }
}

function* findUser(action) {
    try {
        const data = yield commonAxios.get(`users/${action.id}`);

        yield put({
            type: FIND_USER_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_USER_FAILURE,
            error: error

        });
    }
}

function* findUserId(action) {
    try {
        const data = yield commonAxios.get(`users/account/${action.id}`);

        yield put({
            type: FIND_USERID_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_USERID_FAILURE,
            error: error

        });
    }
}

export function* watchSaveUser() {
    yield takeLatest(SAVE_USER_REQUEST, save);
}
export function* watchFindUser() {
    yield takeLatest(FIND_USER_REQUEST, findUser);
}
export function* watchFindUserId() {
    yield takeLatest(FIND_USERID_REQUEST, findUserId);
}
