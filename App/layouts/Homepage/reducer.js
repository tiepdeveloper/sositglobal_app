import { FETCHING_DATA, FETCHING_DATA_SUCCESS, FETCHING_DATA_FAILURE } from './constants'
import  { fromJS } from 'immutable';
const initialState = fromJS({
    data: [],
    dataFetched: false,
    isFetching: false,
    error: false
});

export default function homepageReducer (state = initialState, action) {
    switch (action.type) {
        case FETCHING_DATA:
            return state.set('isFetching',true);
        case FETCHING_DATA_SUCCESS:
            return state.set('data',action.data).set('isFetching',false);
        case FETCHING_DATA_FAILURE:
            return state.set('data',[]).set('isFetching',false);
        default:
            return state
    }
}