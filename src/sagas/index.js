import {all, fork} from 'redux-saga/effects';
import {watchLogin} from './login';
import {watchSignup} from './signup';
import {watchOauth} from './oauth';
import {watchFindItemById, watchFindItems} from './items';
import {watchFindPartnerById} from "./partners";
import {watchSaveRent, watchFindRents, watchFindRentById} from "./rents";
import {watchSaveUser, watchFindUser, watchFindUserId} from "./users";

export default function* rootSaga() {
    yield all([
        fork(watchLogin),
        fork(watchSignup),
        fork(watchOauth),
        fork(watchFindItemById),
        fork(watchFindItems),
        fork(watchFindPartnerById),
        fork(watchSaveRent),
        fork(watchFindRents),
        fork(watchFindRentById),
        fork(watchSaveUser),
        fork(watchFindUser),
        fork(watchFindUserId),

    ]);
}
