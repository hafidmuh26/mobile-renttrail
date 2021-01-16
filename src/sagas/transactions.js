import {
    SAVE_TRANSACTION_REQUEST, SAVE_TRANSACTION_SUCCESS, SAVE_TRANSACTION_FAILURE,
    DELETE_TRANSACTION_REQUEST, DELETE_TRANSACTION_SUCCESS, DELETE_TRANSACTION_FAILURE,
    FIND_TRANSACTION_REQUEST, FIND_TRANSACTION_SUCCESS, FIND_TRANSACTION_FAILURE,
    FIND_TRANSACTIONS_REQUEST, FIND_TRANSACTIONS_SUCCESS, FIND_TRANSACTIONS_FAILURE,
    SUMMARY_TRANSACTIONS_REQUEST, SUMMARY_TRANSACTIONS_SUCCESS, SUMMARY_TRANSACTIONS_FAILURE
} from '../actions/constants';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/apiUtils';

function* save(action) {
    const { id, amount, type, description } = action.data;

    try {
        const data = yield (id ?
            commonAxios.put(`transactions/${id}`, { id, amount, type, description }) :
            commonAxios.post('transactions', { amount, type, description }));

        yield put({
            type: SAVE_TRANSACTION_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: SAVE_TRANSACTION_FAILURE,
            error: error

        });
    }
}

function* deleteById(action) {
    try {
        const data = yield commonAxios.delete(`transactions/${action.id}`);
        yield put({
            type: DELETE_TRANSACTION_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: DELETE_TRANSACTION_FAILURE,
            error: error

        });
    }
}


function* findById(action) {
    try {
        const data = yield commonAxios.get(`transactions/${action.id}`);

        yield put({
            type: FIND_TRANSACTION_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_TRANSACTION_FAILURE,
            error: error

        });
    }
}

function* findAll(action) {

    const { search, sort = 'asc', page = 0, size = 30 } = action.params || {};
    try {
        const data = yield commonAxios.get('transactions', {
            params: {
                ...search, sort, page, size
            }
        });
        yield put({
            type: FIND_TRANSACTIONS_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_TRANSACTIONS_FAILURE,
            error: error

        });
    }
}

function* findAllSummary(action) {

    const { search, sort = 'asc', page = 0, size = 30 } = action.params || {};
    try {
        const data = yield commonAxios.get('transactions/summary', {
            params: {
                ...search, sort, page, size
            }
        });
        yield put({
            type: SUMMARY_TRANSACTIONS_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: SUMMARY_TRANSACTIONS_FAILURE,
            error: error

        });
    }
}

export function* watchSaveTransaction() {
    yield takeLatest(SAVE_TRANSACTION_REQUEST, save);
}
export function* watchDeleteTransactionById() {
    yield takeLatest(DELETE_TRANSACTION_REQUEST, deleteById);
}
export function* watchFindTransactionById() {
    yield takeLatest(FIND_TRANSACTION_REQUEST, findById);
}
export function* watchFindTransactions() {
    yield takeLatest(FIND_TRANSACTIONS_REQUEST, findAll);
}
export function* watchFindTransactionsSummary() {
    yield takeLatest(SUMMARY_TRANSACTIONS_REQUEST, findAllSummary);
}