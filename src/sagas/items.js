import {
    FIND_ITEM_REQUEST, FIND_ITEM_SUCCESS, FIND_ITEM_FAILURE,
    FIND_ITEMS_REQUEST, FIND_ITEMS_SUCCESS, FIND_ITEMS_FAILURE
} from '../actions/constants';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/apiUtils';

function* findById(action) {

    try {
        const data = yield commonAxios.get(`items/${action.id}`);

        yield put({
            type: FIND_ITEM_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_ITEM_FAILURE,
            error: error

        });
    }
}

function* findAll(action) {

    const { search, sort = 'asc', page = 0, size = 5, name, partner } = action.params || {};
    try {
        const data = yield commonAxios.get('items', {
            params: {
                ...search, sort, page, size, name, partner
            }
        });
        yield put({
            type: FIND_ITEMS_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_ITEMS_FAILURE,
            error: error

        });
    }
}

export function* watchFindItemById() {
    yield takeLatest(FIND_ITEM_REQUEST, findById);
}
export function* watchFindItems() {
    yield takeLatest(FIND_ITEMS_REQUEST, findAll);
}
