import { AsyncStorage } from "react-native";
import { OAUTH_SUCCESS, OAUTH_FAILURE, OAUTH_REQUEST } from "../actions/constants";
import { put, takeLatest } from 'redux-saga/effects';
import { commonAxios } from '../utils/apiUtils';

function* oauth(action) {
    const {  email, name, picture, provider } = action.data;

    try {
        const data = yield commonAxios.post('oauth', {
            email, name, picture, provider
        }).then( async (data) => {
            const result = data?.token || null
            const email = data?.email || null
            await AsyncStorage.setItem('token', result)
            await AsyncStorage.setItem('email', email)
        })
        console.log('DATA',data);
        
        yield put({
            type: OAUTH_SUCCESS,
            data: data
        }); 
    } catch (error) {
        yield put({
            type: OAUTH_FAILURE,
            error: error
        });
        
    }
}

export function* watchOauth() {
    yield takeLatest(OAUTH_REQUEST, oauth);
}