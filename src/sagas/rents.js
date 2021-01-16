import {
    SAVE_RENT_REQUEST,
    SAVE_RENT_SUCCESS,
    SAVE_RENT_FAILURE,
    FIND_RENTS_REQUEST,
    FIND_RENTS_SUCCESS,
    FIND_RENTS_FAILURE, FIND_RENT_REQUEST, FIND_RENT_SUCCESS, FIND_RENT_FAILURE
} from '../actions/constants';
import {put, takeLatest} from 'redux-saga/effects';
import {commonAxios} from '../utils/apiUtils';

function* save(action) {
    const {dateEnd, dateStart, item, status, totalPrice, user} = action.data;

    try {
        const data = yield
        // (id ?
        //     commonAxios.put(`rents/${id}`, {
        //         "totalPrice": totalPrice,
        //         "dateStart": dateStart,
        //         "dateEnd": dateEnd,
        //         "item": {"id": item},
        //         "user": {"id": user},
        //         "status": status
        //     }) :
            commonAxios.post('rents', {
                "totalPrice": totalPrice,
                "dateStart": dateStart,
                "dateEnd": dateEnd,
                "item": {"id": item},
                "user": {"id": user},
                "status": status
            });
        // );

        yield put({
            type: SAVE_RENT_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: SAVE_RENT_FAILURE,
            error: error

        });
    }
}

function* findById(action) {
    try {
        const data = yield commonAxios.get(`rents/${action.id}`);

        yield put({
            type: FIND_RENT_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_RENT_FAILURE,
            error: error

        });
    }
}

function* findAll(action) {

    const {search, sort = 'asc', page = 0, size = 30, user} = action.params || {};
    console.log('sagasFindAll', action.params);

    try {
        const data = yield commonAxios.get('rents', {
            params: {
                ...search, sort, page, size, user
            }
        });
        yield put({
            type: FIND_RENTS_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: FIND_RENTS_FAILURE,
            error: error

        });
    }
}

export function* watchSaveRent() {
    yield takeLatest(SAVE_RENT_REQUEST, save);
}

export function* watchFindRentById() {
    yield takeLatest(FIND_RENT_REQUEST, findById);
}

export function* watchFindRents() {
    yield takeLatest(FIND_RENTS_REQUEST, findAll);
}
