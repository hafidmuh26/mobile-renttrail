import {
    SAVE_STOCK_REQUEST, SAVE_STOCK_SUCCESS, SAVE_STOCK_FAILURE,
    DELETE_STOCK_REQUEST, DELETE_STOCK_SUCCESS, DELETE_STOCK_FAILURE,
    FIND_STOCK_REQUEST, FIND_STOCK_SUCCESS, FIND_STOCK_FAILURE,
    FIND_STOCKS_REQUEST, FIND_STOCKS_SUCCESS, FIND_STOCKS_FAILURE,
    SUMMARY_STOCKS_REQUEST, SUMMARY_STOCKS_SUCCESS, SUMMARY_STOCKS_FAILURE
} from '../actions/constants';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/apiUtils';

function* save(action) {
    const { id, item, quantity, unit } = action.data;

    try {
        const data = yield (id ?
            commonAxios.put(`stocks/${id}`, {
                "item": { "id": item?.id },
                "quantity": quantity,
                "unit": { "id": unit?.id }
            })
            : commonAxios.post(`stocks`,
                {
                    "item": { "id": item?.id },
                    "quantity": quantity,
                    "unit": { "id": unit?.id }
                }));

        yield put({
            type: SAVE_STOCK_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: SAVE_STOCK_FAILURE,
            error: error

        });
    }
}

function* deleteById(action) {
    try {
        const data = yield commonAxios.delete(`stocks/${action.id}`);
        yield put({
            type: DELETE_STOCK_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: DELETE_STOCK_FAILURE,
            error: error

        });
    }
}


function* findById(action) {
    try {
        const data = yield commonAxios.get(`stocks/${action.id}`);

        yield put({
            type: FIND_STOCK_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_STOCK_FAILURE,
            error: error

        });
    }
}

function* findAll(action) {

    const { search, sort = 'asc', page = 0, size = 30 } = action.params || {};
    try {
        const data = yield commonAxios.get('stocks', {
            params: {
                ...search, sort, page, size
            }
        });
        yield put({
            type: FIND_STOCKS_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_STOCKS_FAILURE,
            error: error

        });
    }
}

function* findAllSummary(action) {

    const { search, sort = 'asc', page = 0, size = 30 } = action.params || {};
    try {
        const data = yield commonAxios.get('stocks/summary', {
            params: {
                ...search, sort, page, size
            }
        });
        yield put({
            type: SUMMARY_STOCKS_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: SUMMARY_STOCKS_FAILURE,
            error: error

        });
    }
}

export function* watchSaveStock() {
    yield takeLatest(SAVE_STOCK_REQUEST, save);
}
export function* watchDeleteStockById() {
    yield takeLatest(DELETE_STOCK_REQUEST, deleteById);
}
export function* watchFindStockById() {
    yield takeLatest(FIND_STOCK_REQUEST, findById);
}
export function* watchFindStocks() {
    yield takeLatest(FIND_STOCKS_REQUEST, findAll);
}
export function* watchFindStocksSummary() {
    yield takeLatest(SUMMARY_STOCKS_REQUEST, findAllSummary);
}