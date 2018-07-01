import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import { put, takeEvery } from 'redux-saga/effects'

function* fetchData (action) {
    try {
        const data = [];
        data.push({
            thumbImage:'https://byterevel.com/wp-content/uploads/2011/07/PHP-icon.jpeg',
            name:'Php la cai khi gi',
            author:'TiepND',
            image:'https://byterevel.com/wp-content/uploads/2011/07/PHP-icon.jpeg',
            totalLike:10,
            price:'10.000 VND'
        });
        data.push({
            thumbImage:'http://hackervina.wap.sh/images/logo.gif',
            name:'Các bạn đánh rơi chữ A khi học JAVA ? đến với sositglobal',
            author:'TiepND',
            image:'http://hackervina.wap.sh/images/logo.gif',
            totalLike:2000,
            price:'20.000 VND'
        });

        yield put({ type: FETCHING_DATA_SUCCESS, data })
    } catch (e) {
        yield put({ type: FETCHING_DATA_FAILURE })
    }
}

function* dataSaga () {
    yield takeEvery(FETCHING_DATA, fetchData)
}

export default dataSaga