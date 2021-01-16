import {AsyncStorage} from 'react-native';

const axios = require('axios');
const commonAxios = axios.create({
    baseURL: 'http://10.107.130.32:8080/',
    timeout: 5000
});

commonAxios.interceptors.response.use(function (response) {
    const { data } = response;
    if (data.code != 0) {
        const error = new Error(data.message || 'Uknown error.');
        error.data = data.data;
        throw error;
    }
    return sleep(100, data.data);
}, function (error) {
    return Promise.reject(error);
});

commonAxios.interceptors.request.use(async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
        config.headers.Authorization = "Bearer " + token
    }
    return config;
}, error => {
    return Promise.reject(error)
});



function sleep(delay, value) {
    return new Promise(function (resolve) {
        setTimeout(resolve, delay, value);
    });
}

export { commonAxios };
