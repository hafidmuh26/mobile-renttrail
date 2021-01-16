import { LOGIN_FAILURE, LOGIN_SUCCESS, LOGIN_REQUEST} from '../actions/constants';
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/apiUtils';
import { AsyncStorage } from 'react-native';


function* login(action) {
    const { email, password } = action.data;

    try {
        const data = yield commonAxios.post('auth/login', {
            email,
            password
        }).then( async (data) => {
            const result = data?.token || null
            const email = data?.email || null
            await AsyncStorage.setItem("token", result)
            await AsyncStorage.setItem("email", email)
        })
        yield put({
            type: LOGIN_SUCCESS,
            data: data
        });
    } catch (error) {
        yield put({
            type: LOGIN_FAILURE,
            error: error
        });
    }
}

export function* watchLogin() {
    yield takeLatest(LOGIN_REQUEST, login);
}
