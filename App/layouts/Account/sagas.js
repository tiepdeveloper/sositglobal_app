import { LOGIN } from './constants'
import { put, takeEvery } from 'redux-saga/effects'
import axios from 'axios';

function*  checkloginFetch(action) {
    try {
        const requestData = action.data;
        const userResponse =  yield axios.post('http://127.0.0.1:3000/users/login', {username:requestData.username, password:requestData.password});
         const data = userResponse.data;
        yield put({ type: LOGIN.SUCCESS, data });

    } catch (e) {
        yield put({ type: LOGIN.FAILURE })
    }
}

function* dataSaga () {
    yield takeEvery(LOGIN.REQUEST, checkloginFetch)
}

export default dataSaga;